// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devourNow = $(this).data("devournow");
  
      var newDevouredState = {
        devoured: devourNow
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#addburger").val().trim(),
        devoured: true
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  