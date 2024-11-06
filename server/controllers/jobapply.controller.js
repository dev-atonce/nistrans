const Service = require("../services/jobapply.service");

const methods = {
    async onGetAll(req, res) {
        try {
            let result = await Service.findAll(req, res);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onGetById(req, res) {
        try {
            let result = await Service.findById(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsert(req, res) {
        try {
            let result = await Service.insert(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },

    async onUpdate(req, res) {
        try {
            const result = await Service.update(req, res);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onDelete(req, res) {
        try {
            const result = await Service.delete(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },
};

module.exports = { ...methods };
