const { Location } = require("../models");

const locationData = [
  {
    street_address: "1644 Platte St",
    city: "Denver",
    state: "CO",
    zipcode: 80202,
    restaurant_id: 1,
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
