window.onload =function(){

const form = document.getElementById("coin");

form.onsubmit = function(event){
event.preventDefault();

let under = document.getElementById("under");
under.setAttribute("class","hidden");
let over =document.getElementById("over");
over.setAttribute("class","hidden");

const age = parseInt(document.getElementById("age").value);
console.log(age);
if (age < 21){
under.removeAttribute("class");
} else {
over.removeAttribute("class");
}
}

}