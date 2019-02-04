const session = require("express-session");
const config = require("../config");

module.exports = session(config.session);
