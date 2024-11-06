const Banner = require("../models/Banner.js");
const config = require("../configs/app");
const fs = require("fs/promises");
const { createUploader } = require("../helpers/uploader.helper.js");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
    async find() {
        try {
            const rows = await Banner.find({ status: true }).sort({ sort: "asc" });
            const count = await Banner.countDocuments({ status: true });
            return {
                total: count,
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorNotFound(error.message));
        }
    },

    async findAll(req) {
        try {
            const limit = +config.pageLimit;
            const offset = +(limit * ((req.query.page || 1) - 1));
            const rows = await Banner.find()
                .sort({ sort: "asc" })
                .limit(limit)
                .skip(offset);
            const count = await Banner.countDocuments();
            return {
                total: count,
                lastPage: Math.ceil(count / limit),
                currPage: +req.query.page || 1,
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorNotFound(error.message));
        }
    },

    async findById(id) {
        try {
            const obj = await Banner.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorNotFound("id: not found"));
        }
    },

    async insert(req, res) {
        return new Promise((resolve, reject) => {
            const uploader = createUploader("./public/image/banner");
            uploader.single("image")(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const data = req.body;
                        data.image = req.file?.path;
                        const obj = new Banner(data);
                        const inserted = await obj.save();
                        resolve(inserted);
                    } catch (error) {
                        reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async update(req, res) {
        return new Promise((resolve, reject) => {
            const uploader = createUploader("./public/image/banner");
            uploader.single("image")(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const data = req.body;
                        const obj = await Banner.findById(req.params.id);
                        if (!obj) return reject(ErrorNotFound("id: not found"));
                        if (req.file) {
                            if (obj?.image) {
                                try {
                                    await fs.unlink(obj.image);
                                } catch (error) {
                                    if (error.code !== "ENOENT") {
                                        throw error;
                                    }
                                }
                            }
                            data.image = req.file?.path;
                        }
                        await Banner.updateOne({ _id: req.params.id }, data, {
                            runValidators: true,
                            new: true,
                        });
                        resolve(Object.assign(obj, data));
                    } catch (error) {
                        reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async delete(id) {
        try {
            const obj = await Banner.findOneAndDelete({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            if (obj?.image) {
                try {
                    await fs.unlink(obj.image);
                } catch (error) {
                    if (error.code !== "ENOENT") {
                        throw error;
                    }
                }
            }
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },
};

module.exports = { ...methods };
