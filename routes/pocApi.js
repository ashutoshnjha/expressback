var express = require("express");
var pocRouter = express.Router();

var data = [
    {
        "title": "Career Conselling",
        "description": "Career Conselling",
        "completed": false
    },
    {
        "title": "Carrer Guidence",
        "description": "Carrer Guidence",
        "completed": false
    },
    {
        "title": "Learning material",
        "description": "Learning material & resources",
        "completed": false
    },
    {
        "title": "Up-skill",
        "description": "Up-skill planning",
        "completed": false
    }
]
pocRouter.get("/", function(req, res, next) {
    res.send(data);
});

module.exports = pocRouter;