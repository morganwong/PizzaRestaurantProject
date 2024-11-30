//When Submit is pressed by customer
document.getElementById("Contact-Form").onsubmit = function(event) {
  event.preventDefault(); 

  // Get customers name 
  var name = document.getElementById("name").value;

  // Customer thank you message
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.textContent = "Hi " + name + ". Thank you for contacting us! Your message has been recieved. Our Perfecto Pizza team will contact you soon!";
  confirmationMessage.classList.remove("d-none");  // Make the confirmation message visible

  // Reset
  document.getElementById("Contact-Form").reset();
};

