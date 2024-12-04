// When Submit is pressed by customer
$("#Contact-Form").submit(function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get customer's name
  var name = $("#name").val();

  // Customer thank you message
  var confirmationMessage = $("#confirmationMessage");
  confirmationMessage.text("Hi " + name + ". Thank you for contacting us! Your message has been received. Our Perfecto Pizza team will contact you soon!");
  confirmationMessage.removeClass("d-none"); 

  // Reset the form
  $("#Contact-Form")[0].reset();
});
