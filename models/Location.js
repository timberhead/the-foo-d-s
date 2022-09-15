const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		street_address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
			},
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
			},
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
			},
		},
		zipcode: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [5],
				len: [9],
			},
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
	{ sequelize, freezeTableName: true, underscored: true, modelName: "location" }
);

module.exports = Location;
