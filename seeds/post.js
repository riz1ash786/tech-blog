const { Post } = require("../models");

const postData = [
  {
    title: "That's unbelievable!",
    content: "The truth was that it was very much believable",
    user_id: 1,
  },
  {
    title: "Who would have thought!?",
    content: "I've been at it for a while now and I just hope it works...",
    user_id: 2,
  },
  {
    title:
      "Sometimes with just a little patience you can achieve the greatest of things",
    content:
      "This is true but don't fool yourself in believing you achieved this without God's permission",
    user_id: 3,
  },
  {
    title: "I enjoy all of my cars with a preference for the fast one",
    content:
      "My brother took delivery of his brand new RSQ8 yesterday and I love it!",
    user_id: 5,
  },
  {
    title: "I wonder what I will have for dinner tonight?",
    content:
      "I'm trying to concentrate but I've just received an email with a discount code from Uber Eats",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
