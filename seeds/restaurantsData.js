const { Restaurants } = require("../models");

const restaurantsData = [
  {
    name: "Brider",
    type_id: 1,
  },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;
