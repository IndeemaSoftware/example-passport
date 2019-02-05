const bodyParser = require("body-parser");
const config = require("../config");
const express = require("express");
const passport = require("passport");
const passportRouter = require("./passport");
const session = require("./session");
// const R = require("ramda");

const app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(session);

const api = new express.Router();

api.use("/auth", passportRouter);
api.get("/", function(req, res) {
  res.json({ ok: true });
});
if ("production" !== process.env.NODE_ENV) {
  api.get("/config", function(req, res) {
    res.json({ ok: true, item: config });
  });
}

app.use("/api", api);

app.use(function(req, res) {
  res.status(404);
  res.json({
    ok: false,
    message: `Page ${req.url} not found`,
    client: {
      url: req.url,
      method: req.method,
      headers: req.headers
    }
  });
});

app.listen(config.port || 8085);
