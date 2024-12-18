require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  isProduction: process.env.NODE_ENV === "production",
  token_exp_days: process.env.TOKEN_EXP_DAYS || 1,
  secret:
    process.env.NODE_ENV === "production"
      ? process.env.SECRET
      : "nistrans-secret",
  mongodbUri: process.env.MONGODB_URI,
  pageLimit: process.env.PAGE_LIMIT || 15,
  apiVersion: process.env.API_VERSION || 1,

  limitFileSize: process.env.LIMIT_FILE_SIZE || 2 * 1024 * 1024,
  limitFieldSize: process.env.LIMIT_FIELD_SIZE || 25 * 1024 * 1024,
  cacheControlMaxAgeDay: process.env.CACHE_CONTROL_MAX_AGE_DAY || 30,

  mailHost: process.env.MAIL_HOST,
  mailPort: process.env.MAIL_PORT,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASSWORD,
  mailDefault: process.env.MAIL_SENDER_DEFAULT,
  mailTo: process.env.MAIL_TO,
};
