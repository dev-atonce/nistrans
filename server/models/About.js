const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    detail: { type: String, required: true },
    type: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    detail: this.detail,
    type: this.type,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_about", schema);
