const { Post } = require("../models");

const postdata = [
  {
    postTitle: "Race weekend",
    postContent: "What an exciting weekend!",
    userId: 1,
  },
  {
    postTitle: "Family",
    postContent: "The sun is shining so let's spend time together as a family",
    userId: 2,
  },
  {
    postTitle: "New car",
    postContent: "I'm so happy I finally got my new car!",
    userId: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
