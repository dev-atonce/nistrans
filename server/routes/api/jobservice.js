const router = require("express").Router();
const controllers = require("../../controllers/jobservice.controller");
const validator = require("../../validators");
const auth = require("../auth");

router.get("/", controllers.onGet);
router.get("/home/:id", controllers.onGetHomeById);
router.get("/all", auth.required, controllers.onGetAll);
router.get(
  "/:id",
  [auth.required, validator.jobservice.findById, validator.check],
  controllers.onGetById
);

router.post(
  "/",
  [auth.required, validator.jobservice.insert, validator.check],
  controllers.onInsert
);
router.put(
  "/:id",
  [auth.required, validator.jobservice.update, validator.check],
  controllers.onUpdate
);
router.delete(
  "/:id",
  [auth.required, validator.jobservice.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
