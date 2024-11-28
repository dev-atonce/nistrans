const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
    {
        blog_image: { type: String },
        attachment: { type: String },
        blog_title_th: { type: String },
        blog_title_en: { type: String },
        blog_title_jp: { type: String },
        blog_description_th: { type: String },
        blog_description_en: { type: String },
        blog_description_jp: { type: String },
        blog_detail_th: { type: String },
        blog_detail_en: { type: String },
        blog_detail_jp: { type: String },
        type: { type: String },
        location: { type: String },
        slug: { type: String, required: true, unique: true },
        sort: { type: Number },
        status: { type: Boolean, default: false },
    },
    { timestamps: true }
);

schema.plugin(uniqueValidator);

schema.pre("save", async function (next) {
    if (!this.sort) {
        try {
            const maxSort = await this.constructor.findOne().sort("-sort").exec();
            this.sort = maxSort ? maxSort.sort + 1 : 1;
            next();
        } catch (error) {
            next(error);
        }
    }
});

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        blog_image: this.blog_image,
        blog_title_th: this.blog_title_th,
        blog_title_en: this.blog_title_en,
        blog_title_jp: this.blog_title_jp,
        blog_description_th: this.blog_description_th,
        blog_description_en: this.blog_description_en,
        blog_description_jp: this.blog_description_jp,
        blog_detail_th: this.blog_detail_th,
        blog_detail_en: this.blog_detail_en,
        blog_detail_jp: this.blog_detail_jp,
        type: this.type,
        location: this.location,
        attachment: this.attachment,
        slug: this.slug,
        sort: this.sort,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("tb_blog", schema);
