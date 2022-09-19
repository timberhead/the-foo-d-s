const { Location } = require("../models");

const locationData = [
	{
		street_address: "42 Central Avenue",
		city: "Denver",
		state: "CO",
		zipcode: 80238,
		restaurant_id: 1,
	},
	{
		street_address: "683 Castle Avenue",
		city: "Denver",
		state: "CO",
		zipcode: 80251,
		restaurant_id: 2,
	},
	{
		street_address: "32 Daisy Street",
		city: "Denver",
		state: "CO",
		zipcode: 80216,
		restaurant_id: 3,
	},
	{
		street_address: "18 Union Avenue",
		city: "Denver",
		state: "CO",
		zipcode: 80203,
		restaurant_id: 4,
	},
	{
		street_address: "2 Stardance Road",
		city: "Denver",
		state: "CO",
		zipcode: 80014,
		restaurant_id: 5,
	},
	{
		street_address: "77 Lake Drive",
		city: "Denver",
		state: "CO",
		zipcode: 80123,
		restaurant_id: 6,
	}, 
	{
		street_address: "895 Harvest Street",
		city: "Denver",
		state: "CO",
		zipcode: 80128,
		restaurant_id: 7,
	}, 
	{
		street_address: "3 S Main Street",
		city: "Denver",
		state: "CO",
		zipcode: 80123,
		restaurant_id: 8,
	}, 
	{
		street_address: "476 White Bear Lane",
		city: "Denver",
		state: "CO",
		zipcode: 80019,
		restaurant_id: 9,
	}, 
	{
		street_address: "43 Stratton Drive",
		city: "Denver",
		state: "CO",
		zipcode: 80203,
		restaurant_id: 10,
	}, 
	{
		street_address: "12 Baker Road",
		city: "Denver",
		state: "CO",
		zipcode: 80238,
		restaurant_id: 11,
	},
	{
		street_address: "78 Aspen Lane",
		city: "Denver",
		state: "CO",
		zipcode: 80110,
		restaurant_id: 12,
	}
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
