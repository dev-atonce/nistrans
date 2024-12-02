const { validationResult } = require("express-validator");

// Import Validators
const user = require("./user");
const banner = require("./banner");
const formcontact = require("./formcontact");
const blog = require("./blog");

const validators = {
  user,
  banner,
  formcontact,
  blog,
};

module.exports = {
  check(req, res, next) {
    let errors = validationResult(req).array();
    if (errors.length == 0) return next();
    let error = new Error(`${errors[0].path}: ${errors[0].msg}`);
    error.status = 422;
    throw error;
  },
  ...validators,
};