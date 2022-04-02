const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "That's unbelievable!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Who would have thought!?",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text:
      "Sometimes with just a little patience you can achieve the greatest of things",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I enjoy all of my cars with a preference for the fast one",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "Tomorrow is a new day",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "This is shocking",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I wonder what I will have for dinner tonight?",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "I think this is working",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
