const FormContact = require("../models/FormContact");
const config = require("../configs/app");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const configMail = {
  host: config.mailHost,
  port: config.mailPort,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: config.mailUser,
    pass: config.mailPass,
  },
};

const mailMessage = (mailTo, subject, template) => {
  let messageMail = {
    from: `"Website INQUIRY" <${config.mailDefault}>`,
    to: mailTo,
    subject: subject,
    html: template,
  };
  return messageMail;
};

let MailGenerator = new Mailgen({
  theme: "salted",
  product: {
    name: "Siam Nistrans Co.,Ltd.",
    link: "https://th.nissin-asia.com/", // URL Website
  },
});

const methods = {
  async storeContact(data) {
    try {
      const obj = new FormContact(data);
      const inserted = await obj.save();
      return inserted;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async sendEmail(req) {
    const topic = req.body.topic;
    
    // Store contact first (ไม่ต้องรอ sendMail)
    const stored = await methods.storeContact(req.body);

    // Send emails separately (fire-and-forget)
    const mailList = {
      การขนส่ง: "TRANSPORTATION@th.nissin-asia.com",
      "Haco Lab": "TRANSPORTATION@th.nissin-asia.com",
      คลังสินค้าและการจัดเก็บ: "STORAGE@th.nissin-asia.com",
      ข่าวรับสมัครบุคคลากร: "ADMIN-GA@th.nissin-asia.com",
      งานขนย้าย: "hikkoshi@th.nissin-asia.com",
      อื่นๆ: "falove.falove01@gmail.com",
    };

    const mailPromises = topic.map((item) => {
      let response = {
        body: {
          intro: "You Have Inquiry From Website !",
          table: [
            {
              title: req.body.subject,
              data: [
                { "#": "Name", detail: req.body.contactName },
                { "#": "Company", detail: req.body.companyName },
                { "#": "Department", detail: req.body.department },
                { "#": "Email", detail: req.body.email },
                { "#": "Telephone", detail: req.body.telephone },
                { "#": "Company Address", detail: req.body.address },
                { "#": "Topic", detail: item },
                { "#": "Details", detail: req.body.detail },
              ],
              columns: {
                customWidth: { "#": "25%", detail: "75%" },
                customAlignment: { detail: "left" },
              },
            },
          ],
        },
      };

      let mail = MailGenerator.generate(response);
      const mailTo = mailList[item];
      let transporter = nodemailer.createTransport(configMail);

      return new Promise((resolve, reject) => {
        transporter.sendMail(
          mailMessage(mailTo, "Inquiry Website", mail),
          (error, info) => {
            if (error) {
              console.log(`❌ Send mail error to ${mailTo}:`, error.message);
              reject(ErrorBadRequest(error.message));
            } else {
              console.log(`✅ Send mail success to ${mailTo}`);
              resolve(info.envelope);
            }
          }
        );
      });
    });

    // Fire-and-forget emails (don't await)
    Promise.allSettled(mailPromises).then((results) => {
      console.log(`📧 Mail results: ${results.filter(r => r.status === 'fulfilled').length}/${results.length} sent`);
    });

    // Return success immediately after storing contact
    return { success: true, data: stored };
  },

  async findAll(req) {
    const limit = +config.pageLimit;
    const offset = +(limit * ((req.query.page || 1) - 1));
    try {
      const rows = await FormContact.find()
        .sort({ sort: "asc" })
        .limit(limit)
        .skip(offset);
      const count = await FormContact.countDocuments();
      return {
        total: count,
        lastPage: Math.ceil(count / limit),
        currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await FormContact.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async update(req) {
    try {
      const obj = await FormContact.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      ).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async delete(id) {
    try {
      const obj = await FormContact.findOneAndDelete({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
