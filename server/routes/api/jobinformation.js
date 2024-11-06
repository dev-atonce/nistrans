const router = require("express").Router();
const controllers = require("../../controllers/jobinformation.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.get("/all", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.jobinformation.findById, validator.check], controllers.onGetById);
router.post("/", [validator.jobinformation.insert, validator.check], controllers.onInsert); // client api
router.put("/:id", [auth.required, validator.jobinformation.update, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.jobinformation.deleteById, validator.check], controllers.onDelete);

module.exports = router;
