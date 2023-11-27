var express = require("express");
var loginRouter = express.Router();

var loginData = {
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2h1QGFzaHUuY29tIiwibmFtZSI6IkFzaHV0b3NoIEpoYSIsImlhdCI6MTUxNjIzOTAyMiwiYXNodUtleSI6IkFzaHUgVmFsdWUifQ.MuD6fraxVT8tCOXlS7Bhkyo1lEllz2jVIm10Fzkbr0w"
}
loginRouter.post("/", function(req, res, next) {
    res.send(loginData);
});


module.exports = loginRouter;

/*
{
  "sub": "ashu@ashu.com",
  "name": "Ashutosh Jha",
  "iat": 1516239022,
  "ashuKey": "Ashu Value"
}
*/