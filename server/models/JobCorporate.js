const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    contact_name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    company_name: this.company_name,
    contact_name: this.contact_name,
    phone: this.phone,
    email: this.email,
    title: this.title,
    detail: this.detail,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_jobcorporate", schema);
