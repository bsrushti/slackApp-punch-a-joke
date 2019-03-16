const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { serveJoke } = require("./handlers");

const jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.json());
app.post("/", jsonParser, serveJoke);

module.exports = app;
