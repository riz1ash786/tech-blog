const { User } = require("../models");

const userData = [
  {
    username: "riz1ash",
    email: "riz1ah786@gmail.com",
    password: "password",
  },
  {
    username: "hamd",
    email: "harrishamd@gmail.com",
    password: "password123",
  },
  {
    username: "salah",
    email: "salah0@gmail.com",
    password: "password123",
  },
  {
    username: "picante",
    email: "picante@gmail.com",
    password: "password123",
  },
  {
    username: "ayah",
    email: "ayah@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
