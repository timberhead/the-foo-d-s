const { FoodTypes } = require("../models");

const foodTypesData = 
[
    {
        type: "American"
    },
    {
        type: "New American"
    },
    {
        type: "Pizza"
    }
]

const seedFoodTypes = () => FoodTypes.bulkCreate(foodTypesData);

module.exports = seedFoodTypes;