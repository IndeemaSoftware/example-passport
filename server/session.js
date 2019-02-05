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

const sessionConfig = Object.create(config.session)
sessionConfig.store = new RedisStore(config.session.store);
module.exports = session(sessionConfig);
