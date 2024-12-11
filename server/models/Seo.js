const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    page: { type: String },
    seoDescriptionTH: { type: String },
    seoDescriptionEN: { type: String },
    seoDescriptionJP: { type: String },
    seoKeywordTH: { type: String },
    seoKeywordEN: { type: String },
    seoKeywordJP: { type: String },
    seoTitleTH: { type: String },
    seoTitleEN: { type: String },
    seoTitleJP: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    page: this.page,
    seoDescriptionTH: this.seoDescriptionTH,
    seoDescriptionEN: this.seoDescriptionEN,
    seoDescriptionJP: this.seoDescriptionJP,
    seoKeywordTH: this.seoKeywordTH,
    seoKeywordEN: this.seoKeywordEN,
    seoKeywordJP: this.seoKeywordJP,
    seoTitleTH: this.seoTitleTH,
    seoTitleEN: this.seoTitleEN,
    seoTitleJP: this.seoTitleJP,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("tb_seos", schema);
