const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
