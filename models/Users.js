const { Model, DataTypes, UUID } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Users extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

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
			unique: true,
			validate: {
				isAlphanumeric: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		hooks: {
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 12);
				return newUserData;
			},
			async beforeUpdate(updateUserData) {
				updateUserData.password = await bcrypt.hash(
					updateUserData.password,
					12
				);
				return updateUserData;
			},
			async beforeBulkCreate(newUserData) {
				for (const user of newUserData) {
					user.password = await bcrypt.hash(user.password, 12);
				}
				return newUserData;
			},
		},
		sequelize,
		underscored: true,
		modelName: "users",
	}
);

module.exports = Users;
