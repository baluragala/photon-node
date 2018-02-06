const express = require("express");
const app = express();

app.all("*", function(req, res, next) {
  console.log(req.url);
  next();
});

app.get("/", function(req, res, next) {
  res.status(201);
  res.end("<h1>Hello express2</h1>");
  console.log(2);
});

app.listen(3000);
