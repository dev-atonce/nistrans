const JobInformation = require("../models/JobInformation.js");
const config = require("../configs/app");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");
const { createUploader } = require("../helpers/uploader.helper.js");
const fs = require("fs/promises");

const methods = {
    async findAll(req) {
        try {
            const limit = +config.pageLimit;
            const offset = +(limit * ((req.query.page || 1) - 1));
            const rows = await JobInformation.find()
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset);
            const count = await JobInformation.countDocuments();
            return {
                total: count,
                lastPage: Math.ceil(count / limit),
                currPage: +req.query.page || 1,
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async findById(id) {
        try {
            const obj = await JobInformation.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async insert(req, res) {
        return new Promise((resolve, reject) => {
            createUploader("./public/file/").fields([
                { name: "resume", maxCount: 1 },
                { name: "profile_image", maxCount: 1 },
                { name: "en_skill_file", maxCount: 1 },
                { name: "jp_skill_file", maxCount: 1 },
                { name: "ch_skill_file", maxCount: 1 },
                { name: "kr_skill_file", maxCount: 1 },
            ])(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const data = req.body;
                        data.resume = req.files.resume[0].path;
                        data.profile_image = req.files.profile_image[0].path;
                        data.en_skill_file = req.files.en_skill_file[0].path;
                        data.jp_skill_file = req.files.jp_skill_file[0].path;
                        data.ch_skill_file = req.files.ch_skill_file[0].path;
                        data.kr_skill_file = req.files.kr_skill_file[0].path;
                        const obj = new JobInformation(data);
                        const inserted = await obj.save();
                        resolve(inserted);
                    } catch (error) {
                        reject(ErrorBadRequest(error.message));
                    }
                }
            })
        });
    },

    async update(req, res) {
        return new Promise((resolve, reject) => {
            createUploader("./public/file/").fields([
                { name: "resume", maxCount: 1 },
                { name: "profile_image", maxCount: 1 },
                { name: "en_skill_file", maxCount: 1 },
                { name: "jp_skill_file", maxCount: 1 },
                { name: "ch_skill_file", maxCount: 1 },
                { name: "kr_skill_file", maxCount: 1 },
            ])(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                }
                try {
                    const data = req.body;
                    const obj = await JobInformation.findById(req.params.id);
                    if (!obj) return reject(ErrorNotFound("id: not found"));

                    const handleFileUpdate = async (fieldName) => {
                        if (req.files[fieldName]) {
                            if (obj[fieldName]) {
                                try {
                                    await fs.unlink(obj[fieldName]);
                                } catch (error) {
                                    if (error.code !== "ENOENT") {
                                        throw error;
                                    }
                                }
                            }
                            data[fieldName] = req.files[fieldName][0].path;
                        }
                    };

                    const fieldsToUpdate = [
                        "resume",
                        "profile_image",
                        "en_skill_file",
                        "jp_skill_file",
                        "ch_skill_file",
                        "kr_skill_file",
                    ];

                    await Promise.all(fieldsToUpdate.map(field => handleFileUpdate(field)));
                    await JobInformation.updateOne({ _id: req.params.id }, data, {
                        runValidators: true,
                        new: true,
                    });

                    resolve(Object.assign(obj, data));
                } catch (error) {
                    reject(ErrorBadRequest(error.message));
                }
            });
        });
    },

    async delete(id) {
        try {
            const obj = await JobInformation.findOneAndDelete({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));

            const deleteFile = async (filePath) => {
                if (filePath) {
                    try {
                        await fs.unlink(filePath);
                    } catch (error) {
                        if (error.code !== "ENOENT") {
                            throw error;
                        }
                    }
                }
            };

            const filesToDelete = [
                obj?.resume,
                obj?.profile_image,
                obj?.en_skill_file,
                obj?.jp_skill_file,
                obj?.ch_skill_file,
                obj?.kr_skill_file,
            ];

            await Promise.all(filesToDelete.map(path => deleteFile(path)));
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    }
};

module.exports = { ...methods };
