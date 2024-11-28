const Logo = require("../models/Logo.js");
const fs = require("fs/promises");
const { createUploader } = require("../helpers/uploader.helper.js");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
  async findAll() {
    try {
      const rows = await Logo.find();
      return rows;
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async update(req, res) {
    return new Promise((resolve, reject) => {
      const uploader = createUploader("./public/image/logo");
      uploader.single("image")(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = {};
            const obj = await Logo.findOne({ type: req.params.type });
            if (!obj) {
              data.type = req.params.type;
              if (req.file) {
                data.image = req.file.path;
              }
              const obj = new Logo(data);
              const inserted = await obj.save();
              resolve(inserted);
            } else {
              if (req.file) {
                data.image = req.file?.path;
              }
              const newPic = await Logo.findOneAndUpdate({ type: req.params.type }, data, {
                runValidators: true,
                new: true,
              });
              resolve(newPic);
            }
          } catch (error) {
            reject(ErrorBadRequest(error.message));
          }
        }
      });
    });
  },

  async delete(type) {
    try {
      const obj = await Logo.findOneAndDelete({ type: type }).exec();
      if (obj?.image) {
        try {
          await fs.unlink(obj.image);
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
