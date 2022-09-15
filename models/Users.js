const { Model, DataTypes, UUID } = require("sequelize");
const sequelize = require("../config/connection");

class Users extends Model {}

Users.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
			},
		},
        email:
	},
	{ sequelize, underscored: true, modelName: "users" }
);

module.exports = Users;
