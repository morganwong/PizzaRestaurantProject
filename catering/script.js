function submitForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let details = document.getElementById("event-details").value;
    alert(name+", thank you for your details. We will be in touch via "+email+" shortly.");
    document.getElementById("catering-form").reset();
}