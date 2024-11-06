const Seo = require("../services/seo.service");
const { checkAllowFields } = require("../helpers/field.helper");

const allowFields = {
  update: [
    "seoTitleTH",
    "seoTitleEN",
    "seoTitleJP",
    "seoKeywordTH",
    "seoKeywordEN",
    "seoKeywordJP",
    "seoDescriptionTH",
    "seoDescriptionEN",
    "seoDescriptionJP",
  ],
};
const methods = {
  async onGetByPageName(req, res) {
    try {
      let result = await Seo.findByPageName(req.params.pagename);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Seo.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetAll(req, res) {
    try {
      let result = await Seo.find(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      checkAllowFields(req.body, allowFields.update);
      const result = await Seo.update(req?.params?.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
