const sequelize = require("../config/connection");
const seedDishes = require("./dishesData");
const seedDishReviews = require("./dishReviewsData");
const seedFoodTypes = require("./foodTypesData");
const seedLocation = require("./locationData");
const seedRestaurants = require("./restaurantsData");
const seedUsers = require("./usersData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDishes();
  await seedDishReviews();
  await seedFoodTypes();
  await seedLocation();
  await seedRestaurants();
  await seedUsers();

  process.exit(0);
};

seedAll();
