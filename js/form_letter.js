
//business logic


window.onload = function() {
    setFormEventHandler();
}



function setFormEventHandler() {
let form = document.querySelector("form");
console.log(form);
form.onsubmit = function(event) {
    event.preventDefault();
    getAddresseeNameAndSetLetter();

}

}




// UI logic
function getAddresseeNameAndSetLetter() {

    const addresseeName = document.getElementById("addresseeName").value;

    document.querySelector("span#addresseeName1").innerText = addresseeName;
}

