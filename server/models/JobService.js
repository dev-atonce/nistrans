const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        service_icon: { type: String },
        service_name_th: { type: String, required: true },
        service_name_en: { type: String, required: true },
        service_detail: { type: String, required: true },
        status: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        service_icon: this.service_icon,
        service_name_th: this.service_name_th,
        service_name_en: this.service_name_en,
        service_detail: this.service_detail,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("tb_jobservice", schema);
