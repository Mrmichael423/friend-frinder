$("#submit").on("click", function(event) {
  // alert("it works");
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
  $.ajax("/api/friends", {
    type: "POST",
    data: answers
  }).then(function(response) {
    $("#resName").text(response.name);
    $("#resPic").attr("src", response.photo);
    $("#myModal").modal("toggle");

    $("#name").val("");
    $("#pic").val("");
    $("#question1").val(1);
    $("#question2").val(1);
    $("#question3").val(1);
    $("#question5").val(1);
    $("#question6").val(1);
    $("#question7").val(1);
    $("#question8").val(1);
    $("#question9").val(1);
    $("#question10").val(1);
  });
});
