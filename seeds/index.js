const sequelize = require("../config/connection");
const seedDishes = require("./dishesData");
const seedDishReviews = require("./dishReviewsData");
const seedFoodTypes = require("./foodTypesData");
const seedLocation = require("./locationData");
const seedRestaurants = require("./restaurantsData");
const seedUsers = require("./usersData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFoodTypes();
  await seedRestaurants();
  await seedDishes();
  await seedUsers();
  await seedDishReviews();
  await seedLocation();

  process.exit(0);
};

seedAll();
