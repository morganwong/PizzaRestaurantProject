// When Submit is pressed by customer
$("#Contact-Form").submit(function (event) {
  event.preventDefault(); 

  // Get customer name
  var name = $("#name").val();

  // Display confirmation message
  var confirmationMessage = $("#confirmationMessage");
  confirmationMessage.text(
      "Hi " + name + 
      ". Thank you for booking with us! Our Perfecto Pizza team will contact you soon to confirm your reservation!"
  );
  confirmationMessage.removeClass("d-none");

  // Reset the form
  $("#Contact-Form")[0].reset();
});
