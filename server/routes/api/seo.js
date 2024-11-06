const router = require("express").Router();

const controllers = require("../../controllers/seo.controller");
const auth = require("../auth");

router.get("/", auth.required, controllers.onGetAll);
router.get("/:id", auth.required, controllers.onGetById);
router.put("/:id", auth.required, controllers.onUpdate);
router.get("/page-name/:pagename", controllers.onGetByPageName);

module.exports = router;
