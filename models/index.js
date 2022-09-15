const FoodTypes = require("./FoodTypes");
const Restaurants = require("./Restaurants");
const Dishes = require("./Dishes");
const Users = require("./Users");
const DishReviews = require("./DishReviews");
const Location = require("./Location");

FoodTypes.hasMany(Restaurants, {
	foreignKey: "type_id",
	onDelete: "SET NULL",
});

Restaurants.belongsTo(FoodTypes, {
	foreignKey: "type_id",
});

Restaurants.hasOne(Location, {
	foreignKey: "restaurant_id",
	onDelete: "CASCADE",
});

Restaurants.hasMany(Dishes, {
	foreignKey: "restaurant_id",
	onDelete: "CASCADE",
});

Dishes.belongsTo(Restaurants, {
	foreignKey: "restaurant_id",
});

Dishes.hasMany(DishReviews, {
	foreignKey: "dish_id",
	onDelete: "CASCADE",
});

Location.belongsTo(Restaurants, {
	foreignKey: "restaurant_id",
});

Users.hasMany(DishReviews, {
	foreignKey: "user_id",
	onDelete: "SET NULL",
});

DishReviews.belongsTo(Dishes, {
	foreignKey: "dish_id",
});

DishReviews.belongsTo(Users, {
	foreignKey: "user_id",
});

module.exports = { FoodTypes, Restaurants, Dishes, Users, DishReviews };
