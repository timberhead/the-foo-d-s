const { FoodTypes } = require("../models");

const foodTypesData = [
<<<<<<< HEAD
  {
    type: "Asian",
  },
  {
    type: "American",
  },
  {
    type: "Mexican",
  },
  {
    type: "Italian",
  },
=======
	{
		type: "Asian",
	},
	{
		type: "American",
	},
	{
		type: "Mexican",
	},
	{
		type: "Italian",
	},
>>>>>>> main
];

const seedFoodTypes = () => FoodTypes.bulkCreate(foodTypesData);

module.exports = seedFoodTypes;
