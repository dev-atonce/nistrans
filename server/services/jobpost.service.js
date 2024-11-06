const JobPost = require("../models/JobPost.js");
const config = require("../configs/app");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
    scopeSearch(req) {
        $and = [];
        if (req.query.job_type) $and.push({ job_type: req.query.job_type });
        if (req.query.keyword) $and.push({ job_position: { $regex: new RegExp(req.query.keyword, 'i') } });
        if (req.query.province) $and.push({ province: req.query.province });
        const query = $and.length > 0 ? { $and } : {}
        return { query: query }
    },

    async find(req) {
        try {
            const limit = 10;
            const offset = +(limit * ((req.query.page || 1) - 1));
            const _q = methods.scopeSearch(req)
            _q.query.status = true;
            const rows = await JobPost.find(_q.query)
                .sort({ job_code: "desc" })
                .limit(limit)
                .skip(offset);
            const count = await JobPost.countDocuments(_q.query);

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

    async findJob(id) {
        try {
            const obj = await JobPost.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async findAll(req) {
        try {
            const limit = +config.pageLimit;
            const offset = +(limit * ((req.query.page || 1) - 1));
            const _q = methods.scopeSearch(req)

            const rows = await JobPost.find(_q.query)
                .sort({ job_code: "desc" })
                .limit(limit)
                .skip(offset);
            const count = await JobPost.countDocuments(_q.query);
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
            const obj = await JobPost.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async insert(req, res) {
        try {
            const obj = new JobPost(req.body);
            const inserted = await obj.save();
            return inserted;
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async update(req, res) {
        try {
            const obj = await JobPost.findById(req.params.id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            const data = await JobPost.updateOne({ _id: req.params.id }, req.body, {
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
            const obj = await JobPost.findOneAndDelete({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));

            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },
};

module.exports = { ...methods };
