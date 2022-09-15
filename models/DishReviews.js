const { Model, DataTypes, UUID } = require("sequelize");
const sequelize = require("../config/connection");

class DishReviews extends Model {}

DishReviews.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		dish_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "dishes",
				key: "id",
			},
		},
		user_id: {
			type: DataTypes.UUID,
			references: {
				model: "users",
				key: "id",
			},
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "dish_reviews",
	}
);

module.exports = DishReviews;
