const router = require("express").Router();
const controllers = require("../../controllers/formcontact.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.post("/", controllers.send); // client 

router.get("/all/", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.formcontact.findById, validator.check], controllers.onGetById);
router.put("/:id", [auth.required, validator.formcontact.findById, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.formcontact.deleteById, validator.check], controllers.onDelete);

module.exports = router;
