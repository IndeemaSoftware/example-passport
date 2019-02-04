const LocalStrategy = require("passport-local").Strategy;

const users = [
  {
    username: "admin"
  },
  {
    username: "user"
  }
];

for (const user of users) {
  user.password = user.username;
}

module.exports = new LocalStrategy(
  {
    // usernameField: "username",
    // passwordField: "password"
  },
  function(username, password, done) {
    for (const user of users) {
      if (username === user.username) {
        return void done(null, password === user.password ? user : false);
      }
    }
    done(null, false);
  }
);
