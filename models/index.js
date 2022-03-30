const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// users has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// a comment belongsto single user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// a post belongsto single user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// a comment belongsto single post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// users has many posts
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Comment, Post };
