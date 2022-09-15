const { DishReviews } = require("../models");

const dishReviewsData = [
	{
		review: "This is the bomb!",
		dish_id: 1,
		user_id: null,
	},
	{
		review: "Best meatball sandwich in the world!!!",
		dish_id: 2,
		user_id: null,
	},
	{
		review: "Amazing!",
		dish_id: 3,
		user_id: null,
	},
];

const seedDishReviews = () => DishReviews.bulkCreate(dishReviewsData);

module.exports = seedDishReviews;
