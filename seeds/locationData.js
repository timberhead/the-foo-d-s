const { Location } = require("../models");

const locationData = [
  {
    street_address: "1644 Platte St",
    city: "Denver",
    state: "CO",
    zipcode: 80202,
    restaurant_id: 1,
  },
  {
    street_address: "1817 Central St",
    city: "Denver",
    state: "CO",
    zipcode: 80211,
    restaurant_id: 2,
  },
  {
    street_address: "3211 N Pecos St",
    city: "Denver",
    state: "CO",
    zipcode: 80211,
    restaurant_id: 3,
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
