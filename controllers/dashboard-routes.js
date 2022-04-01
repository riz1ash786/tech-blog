const router = require("express").Router();
const { Post, User } = require("../models/");
const withAuth = require("../utils/auth");

// All posts dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    // store the results of the db query in a variable called postData.
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("all-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
