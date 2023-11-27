var express = require("express");
var pocRouter = express.Router();
const postData = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
  ];


var data = [
    [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
        {id: 3, name: 'Carl', country: 'Canada'},
      ],
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
pocRouter.post("/", function(req, res, next) {
    res.send(postData);
});

module.exports = pocRouter;