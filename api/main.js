const express = require("express");
const helmet = require("helmet");
const translate = require("./translate");

const app = express();

app.use(helmet());

app.get("*", (req, res) => {
  res.json(translate(req.query.text, req.query.direction));
});

module.exports = app;
