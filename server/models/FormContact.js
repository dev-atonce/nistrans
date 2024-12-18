const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    contactName: { type: String, required: true },
    department: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    detail: { type: String, required: true },
    topic: { type: Array, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    companyName: this.companyName,
    contactName: this.contactName,
    department: this.department,
    email: this.email,
    telephone: this.telephone,
    address: this.address,
    detail: this.detail,
    topic: this.topic,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_formcontact", schema);
