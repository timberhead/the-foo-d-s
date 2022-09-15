const { Users } = require("../models");

const usersData = [
  {
    username: "Charlie123",
    email: "charlie@email.com",
    password: "secure123",
  },
  {
    username: "Tate456",
    email: "tate@email.com",
    password: "secure123",
  },
  {
    username: "Sophie789",
    email: "sophie@email.com",
    password: "secure123",
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
