$("form").on("submit", function (event) {
  event.preventDefault();
  let $title = $("#title").val();
  let $rating = $("#rating").val();
  if (
    $title.length < 2 ||
    $rating < 0 ||
    $rating > 10 ||
    isNaN($rating) ||
    !$title ||
    !$rating
  )
    //if the title is too short, the rating is too high/low, the rating is not a number, or the title/rating is blank, do nothing
    return;

  $("ul").append(
    "<div><li>Title:" +
      $title +
      "<br>Rating:" +
      $rating +
      "</li><button>Remove</button></div>"
  );
});

$("#movieList").on("click", "button", function () {
  $(this).parent().remove();
});
