const { Restaurants } = require("../models");

const restaurantsData = [
  {
    name: "Brider",
    type_id: 1,
  },
  {
    name: "The Bindery",
    type_id: 2,
  },
  {
    name: "Happy Camper",
    type_id: 3,
  },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;
