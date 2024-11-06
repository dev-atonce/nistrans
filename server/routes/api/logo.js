const router = require("express").Router();
const controllers = require("../../controllers/logo.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.get("/all/", auth.required, controllers.onGetAll);

router.put("/:type", [auth.required], controllers.onUpdate);

router.delete("/:type", [auth.required], controllers.onDelete);

module.exports = router;
