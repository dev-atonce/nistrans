const { param, body } = require("express-validator");

module.exports = {
    type: [param("type").notEmpty().withMessage("is empty")],

    update: [
        param("type").notEmpty().withMessage("is empty"),
        body("detail").notEmpty().withMessage("is empty"),
    ]
};
