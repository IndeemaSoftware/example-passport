const express = require("express");
const config = require("../config");
const bodyParser = require('body-parser');
// const R = require("ramda");

const app = express();

app.use(express.static(__dirname + "/../public"));

app.use(bodyParser.json());

const api = new express.Router();

api.get("/", function(req, res) {
  res.json({ok: true});
});

app.use("/api", api);

app.use(function(req, res) {
  res.status(404);
  res.json({
    ok: false,
    message: `Page ${req.url} not found`
  });
})

app.listen(config.port || 8085);
