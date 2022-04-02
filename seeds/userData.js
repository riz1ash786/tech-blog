const { User } = require("../models");

const userdata = [
  {
    username: "Dave",
    password: "password",
  },
  {
    username: "Ali",
    password: "password",
  },
  {
    username: "Hamd",
    password: "password",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
