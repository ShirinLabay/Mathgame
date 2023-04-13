var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#heading1").text("Start Playing");
    started = true;
    randomizexy();
  }
});

function randomizexy() {
  var a = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 10);
  console.log(a);
  console.log(b);
  $(".question-x").text(a);
  $(".question-y").text(b);

  document.querySelector("#btn").addEventListener("click", function () {
    console.log("The button was clicked!");
    var input = $("#answer").val();
    var aa = $(".question-x").text();
    var bb = $(".question-y").text();
    console.log(input);
    console.log(aa);
    console.log(bb);
    if (aa * bb == input) {
      console.log("correct");
      $("#heading1").text("CORRECT");
      document.querySelector("#btn2").addEventListener("click", function () {
        $("#answer").val("");
        randomizexy();
      });
    } else {
      console.log("not correct");
      $("#heading1").text("WRONG");
    }
  });
}
