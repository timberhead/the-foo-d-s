const { FoodTypes } = require("../models");

const foodTypesData = [
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
    type: "Pizza",
  },
];

const seedFoodTypes = () => FoodTypes.bulkCreate(foodTypesData);

module.exports = seedFoodTypes;
