const router = require("express").Router();
const { where } = require("sequelize");
const sequelize = require("../config/connection");
const {
	FoodTypes,
	Restaurants,
	Dishes,
	DishReviews,
	Location,
} = require("../models");

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
		const typeData = await FoodTypes.findByPk(req.params.id, {});

		const restaurantsData = await Restaurants.findAll({
			where: { type_id: req.params.id },
			include: [{ model: Location }],
			attributes: {
				include: [
					[
						sequelize.literal(
							`(SELECT AVG(dish_reviews.rating) FROM dish_reviews JOIN dishes ON dish_reviews.dish_id = dishes.id JOIN restaurants ON dishes.restaurant_id = restaurants.id WHERE dishes.restaurant_id = restaurants.id)`
						),
						"stars",
					],
				],
			},
		});

		const type = typeData.get({ plain: true });
		const restaurants = restaurantsData.map((restaurant) =>
			restaurant.get({ plain: true })
		);
		// res.status(200).json({ type, restaurants });
		res.render("category", { type, restaurants });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/restaurant/:id", async (req, res) => {
	try {
		const restaurantData = await Restaurants.findByPk(req.params.id, {
			attributes: {
				include: [
					[
						sequelize.literal(
							`(SELECT AVG(dish_reviews.rating) FROM dish_reviews JOIN dishes ON dish_reviews.dish_id = dishes.id JOIN restaurants ON dishes.restaurant_id = restaurants.id WHERE dishes.restaurant_id = restaurants.id)`
						),
						"stars",
					],
				],
			},
		});

		const dishesData = await Dishes.findAll({
			where: { restaurant_id: req.params.id },
			attributes: {
				include: [
					[
						sequelize.literal(
							`(SELECT AVG(dish_reviews.rating) FROM dish_reviews WHERE dishes.id = dish_reviews.dish_id)`
						),
						"stars",
					],
				],
			},
		});

		const restaurant = restaurantData.get({ plain: true });

		const dishes = dishesData.map((dish) => dish.get({ plain: true }));

		// res.status(200).json({ restaurant, dishes });
		res.render("restaurant", { restaurant, dishes });
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
