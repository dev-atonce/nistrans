const router = require("express").Router();
const controllers = require("../../controllers/jobpost.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.get("/", controllers.onGet);
router.get("/job/:id", controllers.onGetJob);
router.get("/all", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.jobpost.findById, validator.check], controllers.onGetById);
router.post("/", [auth.required, validator.jobpost.insert, validator.check], controllers.onInsert);
router.put("/:id", [auth.required, validator.jobpost.update, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.jobpost.deleteById, validator.check], controllers.onDelete);

module.exports = router;
