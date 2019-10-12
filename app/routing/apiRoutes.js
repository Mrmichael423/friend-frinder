var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    var input = req.body.choices;

    for (var i = 0; i < input.length; i++) {
      input[i] = parseInt(input[i]);
      console.log(input[i]);
    }
  });
};
