const router = require("express").Router();
const controllers = require("../../controllers/jobapply.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.get("/all", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.jobapply.findById, validator.check], controllers.onGetById);
router.post("/", [validator.jobapply.insert, validator.check], controllers.onInsert); // client api
router.put("/:id", [auth.required, validator.jobapply.update, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.jobapply.deleteById, validator.check], controllers.onDelete);

module.exports = router;
