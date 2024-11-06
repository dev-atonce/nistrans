const About = require("../models/About.js");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../configs/errorMethods.js");

const methods = {
  async findOne(req, res) {
    try {
      const obj = await About.findOne({ type: req.params.type });
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async update(req, res) {
    try {
      const obj = await About.findOne({ type: req.params.type });
      if (!obj) {
        const data = req.body;
        data.type = req.params.type;
        const obj = new About(data);
        const inserted = await obj.save();
        return inserted;
      } else {
        const data = req.body;
        await About.updateOne({ _id: obj._id }, data, {
          runValidators: true,
          new: true,
        });
        return Object.assign(obj, data);
      }
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
