const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
    {
        blog_image: { type: String },
        blog_title: { type: String, required: true },
        blog_description: { type: String, required: true },
        blog_detail: { type: String, required: true },
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
        blog_title: this.blog_title,
        blog_description: this.blog_description,
        blog_detail: this.blog_detail,
        slug: this.slug,
        sort: this.sort,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("tb_blog", schema);
