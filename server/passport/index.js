const passport = require("passport");
const express = require("express");

const strategies = ["local"];

const router = new express.Router();

for (const strategy of strategies) {
  passport.use(require("./" + strategy));
  router.post("/" + strategy, passport.authenticate(strategy), function(req, res) {
    res.json({
      ok: req.isAuthenticated(),
      user: {
        username: req.user.username
      }
    });
  });
}

module.exports = router;
