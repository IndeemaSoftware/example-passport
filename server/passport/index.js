const passport = require("passport");
const express = require("express");

const strategies = ["local", "facebook"];

const router = new express.Router();

for (const strategy of strategies) {
  passport.use(require("./" + strategy));
  router["local" === strategy ? "post" : "get"]("/" + strategy, passport.authenticate(strategy), function(req, res) {
    res.json({
      ok: req.isAuthenticated(),
      user: req.user
    });
  });
}

module.exports = router;
