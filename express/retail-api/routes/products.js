const express = require("express");
const router = express.Router();

let products = [];

router.get("/", function(req, res) {
  res.json(products);
});

router.post("/", function(req, res) {
  let product = req.body;
  products.push(product);
  res.status(201);
  res.json(product);
});

module.exports = router;
