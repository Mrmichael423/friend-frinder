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
      // console.log(input[i]);
    }
    var friendsIndex = 0;
    var minDiff = 50;
    for (var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      for (var a = 0; a < friends[i].choices.length; a++) {
        var differences = Math.abs(input[i] - friends[i].choices[a]);
        totalDiff += differences;
        // console.log(totalDiff);
      }
      if (totalDiff < minDiff) {
        friendsIndex = i;
        minDiff = totalDiff;
      }
    }
    friends.push(req.body);
    res.json(friends[friendsIndex]);
    // console.log(friends[friendsIndex]);
  });
};
