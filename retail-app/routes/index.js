const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { title: "Retail app", subTitle: "an e-commerce app" });
})

module.exports = router;