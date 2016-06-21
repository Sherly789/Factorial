$(document).ready(function() {
  $("#blankform form").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#input").val());
    var output = 1;

    if ( input < 0 ) {
      $("#output h3").text("You need to input a positive integer!");
    } else {
      for ( i = input; i > 0; i = i - 1 ) {
        output = output * i ;
      };
      $("#output h3").text("The factorial of " + input + " is " + output + ".");
    };
  });
});
