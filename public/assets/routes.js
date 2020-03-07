$(document).ready(function() {
  $(".change-eat").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id
    }).then(function(data) {
      console.log(data);
      location.reload("/");
    });
  });
});
