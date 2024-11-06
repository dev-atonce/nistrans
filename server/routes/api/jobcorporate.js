const router = require("express").Router();
const controllers = require("../../controllers/jobcorporate.controller");
const auth = require("../auth");
const validator = require("../../validators");

router.get("/all", controllers.onGetAll);
router.get(
  "/:id",
  [validator.jobcorporate.findById, validator.check],
  controllers.onGetById
);
router.post(
  "/",
  [validator.jobcorporate.insert, validator.check],
  controllers.onInsert
); // client api
router.put(
  "/:id",
  [validator.jobcorporate.update, validator.check],
  controllers.onUpdate
);
router.delete(
  "/:id",
  [validator.jobcorporate.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
