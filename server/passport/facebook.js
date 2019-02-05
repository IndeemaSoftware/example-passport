const { Strategy } = require("passport-facebook");
const config = require("../../config");

module.exports = new Strategy(Object.create(config.facebook), function(
  accessToken,
  refreshToken,
  profile,
  done
) {
    done(null, profile)
});
