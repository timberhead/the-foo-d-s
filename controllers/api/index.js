const router = require("express").Router();

const userRoutes = require("./user-routes");
const reviewRoutes = require("./review-routes");

router.use("/users", userRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
