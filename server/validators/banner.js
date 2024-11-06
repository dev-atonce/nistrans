const { param, body } = require("express-validator");

module.exports = {
    findById: [param("id").notEmpty().withMessage("is empty")],

    insert: [],

    update: [],
    
    deleteById: [param("id").notEmpty().withMessage("is empty")],
};
