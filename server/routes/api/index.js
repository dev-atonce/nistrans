const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/banner", require("./banner"));
router.use("/formcontact", require("./formcontact"));
router.use("/blog", require("./blog"));
router.use("/seo", require("./seo"));
router.use("/logo", require("./logo"));

module.exports = router;
