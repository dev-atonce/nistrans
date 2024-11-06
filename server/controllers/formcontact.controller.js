const Service = require("../services/formcontact.service");

const methods = {
    async send(req, res) {
        try {
            let result = await Service.sendEmail(req);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onGetAll(req, res) {
        try {
            let result = await Service.findAll(req);
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
