//Request Submission
function submitForm(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let details = document.getElementById("event-details").value;
    alert(name+", thank you for your details. We will be in touch via "+email+" shortly.");
    document.getElementById("catering-form").reset();
}
//Box same size
var boxHeight =+ document.getElementById("p1").offsetHeight+"px";
document.getElementById("p2").style.height = boxHeight;
document.getElementById("p3").style.height = boxHeight;

