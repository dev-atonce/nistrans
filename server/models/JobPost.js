const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
    {
        job_code: { type: String, unique: true },
        job_position: { type: String },
        job_type: { type: String },
        en_skill: { type: String },
        jp_skill: { type: String },
        ch_skill: { type: String },
        kr_skill: { type: String },
        job_description: { type: String },
        salary: { type: String },
        location: { type: String },
        province: { type: String },
        status: { type: Boolean, default: false },
        staff_name: { type: String },
    },
    { timestamps: true }
);

schema.plugin(uniqueValidator);

schema.pre("save", async function (next) {
    try {
        const now = new Date();
        const year = String(now.getFullYear() + 543).slice(-2); // Last two digits of the year
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Zero-padded month
        const baseCode = year + month;

        const lastRecord = await this.constructor.findOne({
            job_code: { $regex: `^${baseCode}` },
        })
            .sort({ job_code: "desc" })
            .exec();

        let sequenceNumber = 1;

        if (lastRecord) {
            const lastCode = lastRecord.job_code;
            const lastSequence = parseInt(lastCode.slice(4), 10); // Get the NN part (last two digits)
            sequenceNumber = lastSequence + 1;
        }

        this.job_code = baseCode + String(sequenceNumber).padStart(2, '0');

        next();
    } catch (error) {
        next(error);
    }
});

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        job_code: this.job_code,
        job_position: this.job_position,
        job_type: this.job_type,
        en_skill: this.en_skill,
        jp_skill: this.jp_skill,
        ch_skill: this.ch_skill,
        kr_skill: this.kr_skill,
        job_description: this.job_description,
        salary: this.salary,
        location: this.location,
        province: this.province,
        status: this.status,
        staff_name: this.staff_name,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("tb_jobpost", schema);
