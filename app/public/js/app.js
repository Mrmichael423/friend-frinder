console.log("this loaded");

$("#submit").on("click", function(event) {
  alert("it works");
  event.preventDefault();

  var answers = {
    name: $("#name")
      .val()
      .trim(),
    picture: $("#pic")
      .val()
      .trim(),
    choices: [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
      $("#question6").val(),
      $("#question7").val(),
      $("#question8").val(),
      $("#question9").val(),
      $("#question10").val()
    ]
  };
});
