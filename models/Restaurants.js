const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Restaurants extends Model {}

Restaurants.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: { type: DataTypes.STRING, allowNull: false },
		type_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "food_types",
				key: "id",
			},
		},
	},
	{ sequelize, underscored: true, modelName: "restaurants" }
);

module.exports = Restaurants;
