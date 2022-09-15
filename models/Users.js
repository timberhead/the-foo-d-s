const { Model, DataTypes, UUID } = require("sequelize");
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
		},
		sequelize,
		underscored: true,
		modelName: "users",
	}
);

module.exports = Users;
