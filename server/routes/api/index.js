const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/banner", require("./banner"));
router.use("/contactinfo", require("./contactinfo"));
router.use("/jobpost", require("./jobpost"));
router.use("/jobapply", require("./jobapply"));
router.use("/jobcorporate", require("./jobcorporate"));
router.use("/jobinformation", require("./jobinformation"));
router.use("/formcontact", require("./formcontact"));
router.use("/jobservice", require("./jobservice"));
router.use("/blog", require("./blog"));
router.use("/about", require("./about"));
router.use("/seo", require("./seo"));
router.use("/logo", require("./logo"));

module.exports = router;
