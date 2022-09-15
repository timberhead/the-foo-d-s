const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dishes extends Model {}

Dishes.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		restaurant_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "restaurants",
				key: "id",
			},
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "dishes",
	}
);

module.exports = Dishes;
