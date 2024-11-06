const Service = require("../services/about.service");

const methods = {
  async onGetOne(req, res) {
    try {
      let result = await Service.findOne(req, res);
      res.success(result);
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
};

module.exports = { ...methods };
