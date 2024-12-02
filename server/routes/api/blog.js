const router = require("express").Router();
const controllers = require("../../controllers/blog.controller");
const validator = require("../../validators");
const auth = require("../auth");

router.get("/", controllers.onGet);

router.get("/all", auth.required, controllers.onGetAll);
router.get("/:id", [auth.required, validator.blog.findById, validator.check], controllers.onGetById);

router.get("/slug/:slug", controllers.onGetBySlug);
router.post("/", [auth.required, validator.blog.insert, validator.check], controllers.onInsert);
router.put("/:id", [auth.required, validator.blog.update, validator.check], controllers.onUpdate);
router.delete("/:id", [auth.required, validator.blog.deleteById, validator.check], controllers.onDelete);

module.exports = router;
