var express = require("express");
var pocRouter = express.Router();

pocRouter.get("/", function(req, res, next) {
    res.send("My POC API response");
});

module.exports = pocRouter;