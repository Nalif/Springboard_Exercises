// waits for the DOM to load
$(function () {
  console.log("Let's get ready to party with jQuery!");

  $("article img").addClass("image-center");

  $("p").last().remove();

  $("#title").css("font-size", Math.random() * 100);

  $("ol").append("<li>Adding a list item</li");

  $("aside").empty().append("<p>I apologize for the list's existence.</p>");

  $(".form-control").on("click", function () {
    $("body").css(
      "background-color",
      "rgb(" +
        $(".form-control").eq(0).val() +
        "," +
        $(".form-control").eq(1).val() +
        "," +
        $(".form-control").eq(2).val() +
        ")"
    );
  });

  $("img").on("click", function () {
    this.remove();
  });
});
