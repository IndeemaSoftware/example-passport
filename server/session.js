const config = require("../config");
const passport = require("passport");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

config.session.store = new RedisStore(config.session.store);
module.exports = session(config.session);
