const { DishReviews } = require("../models");

const dishReviewsData = [
	{
		rating: 5,
		review: "This is the bomb!",
		dish_id: 1,
		user_id: null,
	},
	{
		rating: 1,
		review: "Best meatball sandwich in the world!!!",
		dish_id: 2,
		user_id: null,
	},
	{
		rating: 2,
		review: "Amazing!",
		dish_id: 3,
		user_id: null,
	},
];

const seedDishReviews = () => DishReviews.bulkCreate(dishReviewsData);

module.exports = seedDishReviews;
