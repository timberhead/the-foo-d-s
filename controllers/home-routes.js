const router = require("express").Router();
const sequelize = require("../config/connection");
const { FoodTypes, Restaurants, Dishes, DishReviews } = require("../models");

router.get("/", async (req, res) => {
	try {
		const typeData = await FoodTypes.findAll({});

		const types = typeData.map((type) => type.get({ plain: true }));

		res.status(200).json(types);
		// res.render("homepage", { types });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/category/:id", async (req, res) => {
	try {
		const typeData = await FoodTypes.findByPk(req.params.id, {
			include: [{ all: true, nested: true }],
			attributes: {
				include: [
					[
						sequelize.literal(
							`SELECT AVG(dish_reviews.rating) FROM dish_reviews JOIN dishes ON dish_reviews.dish_id = dishes.id JOIN restaurants ON dishes.restaurant_id = restaurants.id JOIN food_types ON restaurants.type_id = food_types.id WHERE dishes.restaurant_id = restaurants.id AND food_types.id = ${req.params.id}`
						),
						"stars",
					],
				],
			},
		});

		const type = typeData.get({ plain: true });

		res.status(200).json(type);
		// res.render("category", { type });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/restaurant/:id", async (req, res) => {
	try {
		const restaurantData = await Restaurants.findByPk(req.params.id, {
			include: [{ model: Dishes }],
		});

		const restaurant = restaurantData.get({ plain: true });
		res.status(200).json(restaurant);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

module.exports = router;
