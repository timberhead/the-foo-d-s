const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FoodTypes extends Model {}

FoodTypes.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isAlpha: true,
			},
		},
	},
	{ sequelize, underscored: true, modelName: "food_types" }
);

module.exports = FoodTypes;
