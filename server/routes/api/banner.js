const router = require("express").Router();
const controllers = require("../../controllers/banner.controller");
const validator = require("../../validators");
const auth = require("../auth");

router.get("/", controllers.onGet);
router.get("/all", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.banner.findById, validator.check], controllers.onGetById);
router.post("/", [auth.required, validator.banner.insert, validator.check], controllers.onInsert);
router.put("/:id", [auth.required, validator.banner.update, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.banner.deleteById, validator.check], controllers.onDelete);

module.exports = router;
