const JobCorporate = require("../models/JobCorporate.js");
const config = require("../configs/app");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
    async findAll(req) {
        try {
            const limit = +config.pageLimit;
            const offset = +(limit * ((req.query.page || 1) - 1));
            const rows = await JobCorporate.find()
                .sort({ createdAt: "desc" })
                .limit(limit)
                .skip(offset);
            const count = await JobCorporate.countDocuments();
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
            const obj = await JobCorporate.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async insert(req, res) {
        try {
            const obj = new JobCorporate(req.body);
            const inserted = await obj.save();
            return inserted;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async update(req, res) {
        try {
            const obj = await JobCorporate.findById(req.params.id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            const data = await JobCorporate.updateOne({ _id: req.params.id }, req.body, {
                runValidators: true,
                new: true,
            });
            return Object.assign(obj, data);
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async delete(id) {
        try {
            const obj = await JobCorporate.findOneAndDelete({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },
};

module.exports = { ...methods };
