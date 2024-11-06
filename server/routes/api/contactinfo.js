const router = require("express").Router();
const controllers = require("../../controllers/contactInfo.controller");
const auth = require("../auth");

router.get("/", controllers.onGetOne);

router.put("/", auth.required, controllers.onUpdate);

module.exports = router;
