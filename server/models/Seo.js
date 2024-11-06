const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    page: { type: String },
    seoDescriptionTH: { type: String },
    seoKeywordTH: { type: String },
    seoTitleTH: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    page: this.page,
    seoDescriptionTH: this.seoDescriptionTH,
    seoKeywordTH: this.seoKeywordTH,
    seoTitleTH: this.seoTitleTH,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_seos", schema);
