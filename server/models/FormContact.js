const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    contact_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    contact_name: this.contact_name,
    email: this.email,
    phone: this.phone,
    detail: this.detail,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_formcontact", schema);
