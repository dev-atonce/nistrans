const router = require("express").Router();
const controllers = require("../../controllers/about.controller");
const validator = require("../../validators");
const auth = require("../auth");

router.get("/:type", controllers.onGetOne);
router.put("/:type", [auth.required], controllers.onUpdate);

module.exports = router;
