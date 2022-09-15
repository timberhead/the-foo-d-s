const router = require("express").Router();

const userRoutes = require("./user-routes");
const reviewRoutes = require("./review-routes");
const restaurantRoutes = require("./restaurant-routes");

router.use("/user", userRoutes);
// router.use("/review", reviewRoutes);
// router.use("/restaurant", restaurantRoutes);

module.exports = router;
