// After submit is pressed
$("#Contact-Form").submit(function (event) {
  event.preventDefault(); 

  // Get customer name/date and todays date
  var name = $("#name").val();
  var date = $("#date").val();
  var today = new Date().toISOString().split('T')[0]; 

  // Check customers pref date against todays date
  if (date < today) {
    alert("Looks like you have tried to book a date in the past! Please select a valid date and time!" );
    return;
  }
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
