const message = document.querySelector("#message");
message.innerHTML = "Welcome!";



function showName() {

  const name = document.querySelector("#nameInput").Value;

  document.querySelector("#result").innerHTML = "Sana", name;
    
}


const changeBackground = document.querySelector("#container");

container.style.backgroundColor = "lightblue";



const head = document.querySelector("#mainTitle");

mainTitle.style.color = "red";



const num = document.querySelector("#num1").Value;

document.querySelector("#output").innerHTML = 100 , num;



const btn = document.querySelector(".submit-btn");

console.log("Button Clicked");

function addNumbers() {
let num1 = document.querySelector("#first").Value;
let num2 = document.querySelector("#second").Value;

let result = num1 + num2;
document.querySelector("#sum").innerHTML = result;

}


function updateText() {
      document.querySelector(".description").innerText = "Updated successfully";

}


let div = document.querySelector("#box");

box.style.width = "200px";
box.style.backgroundColor = "green";


function showEmail() {
 const email = document.querySelector("#email").Value;

 console.log("emailValue");

}

const para = document.querySelector("#para");

function changefontsize() {

para.style.fontsize = "25px";
}

const name = document.querySelector("#fullName.Value");
function showGreeting () {
document.querySelector("#greeting").innerHTML = "Hello, " + name;

} 

const img = document.querySelector("#profilePic");
function changeImage() {
img.src = "https://i.ytimg.com/vi/MmWRIfRZNz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCiOJS5_o246qFpxYDPGW_jGrk9uA";

}


function checkAgreement() {
const checkbox = document.querySelector("#agree");
const result = document.querySelector("#result");

if(checkbox.checked){
result.innerHTML = "Agreed";
} else {
result.innerHTML ="Not agreed";
}
}


function getselectedValue() {

let dropdown = document.querySelector("#options");

let selectedValue = dropdown.value;

document.querySelector("selectedValue").innerHTML = selectedValue;
}


function showDateTime() {
 let now = new Date();

 document.querySelector("#dateTime").innerHTML = now;

}


function hideParagraph() {

document.querySelector("#togglePara");
togglePara.style.display = "none";

}


function checkEligibility(){

const age = document.querySelector("#age");
const eligibility = document.querySelector("#eligibility");

if (age >= 18){
result.innerHTML = "Eligible";
} else {
result.innerHTML = "Not Eligible";

}
}

function clearSearch (){
document.querySelector("#searchBox").value = "";

}


