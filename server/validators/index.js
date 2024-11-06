const { validationResult } = require("express-validator");

// Import Validators
const user = require("./user");
const banner = require("./banner");
const jobpost = require("./่jobpost");
const jobapply = require("./jobapply");
const jobcorporate = require("./jobcorporate");
const jobinformation = require("./jobinformation");
const formcontact = require("./formcontact");
const jobservice = require("./jobservice");
const blog = require("./blog");
const about = require("./about");

const validators = {
  user,
  banner,
  jobpost,
  jobapply,
  jobcorporate,
  jobinformation,
  formcontact,
  jobservice,
  blog,
  about,
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