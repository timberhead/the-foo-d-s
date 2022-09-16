const { FoodTypes } = require("../models");

const foodTypesData = [
  {
    type: "Asian",
  },
  {
    type: "American",
  },
  {
    type: "New American",
  },
  {
    type: "Pizza",
  },
];

const seedFoodTypes = () => FoodTypes.bulkCreate(foodTypesData);

module.exports = seedFoodTypes;
