const { param, body } = require("express-validator");

module.exports = {
    findById: [param("id").notEmpty().withMessage("is empty")],

    insert: [
        body("contact_name").notEmpty().withMessage("is empty"),
        body("email").notEmpty().withMessage("is empty"),
        body("phone").notEmpty().withMessage("is empty"),
        body("detail").notEmpty().withMessage("is empty"),
    ],

    deleteById: [param("id").notEmpty().withMessage("is empty")],
};
