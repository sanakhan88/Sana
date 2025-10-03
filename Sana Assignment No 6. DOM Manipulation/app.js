// 1. Select a paragraph with id "message" and change its text to "Welcome!".
const message = document.querySelector("#message");
message.innerHTML = "Welcome!";


// 2. Get the value from an input with id "nameInput" and display it inside a div with id
// "result".
function showName() {
  const name = document.querySelector("#nameInput").Value;
  document.querySelector("#result").innerHTML = "Sana", name;
    
}

// 3. When a button is clicked, change the background color of a section with id
// "container" to light blue.
const changeBackground = document.querySelector("#container");

container.style.backgroundColor = "lightblue";


// 4. Select a heading (h1) with id "mainTitle" and change its color to red.
const head = document.querySelector("#mainTitle");

mainTitle.style.color = "red";


// 5. Get the number from an input with id "num1" and show it inside a paragraph with id
// "output".
const num = document.querySelector("#num1").Value;
document.querySelector("#output").innerHTML = 100 , num;


// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.
const btn = document.querySelector(".submit-btn");
console.log("Button Clicked");

// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".
function addNumbers() {
let num1 = document.querySelector("#first").Value;
let num2 = document.querySelector("#second").Value;
let result = num1 + num2;
document.querySelector("#sum").innerHTML = result;

}

// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".
function updateText() {
      document.querySelector(".description").innerText = "Updated successfully";

}

// 9. Select a div with id "box" and set its width to 200px and background color to green.
let div = document.querySelector("#box");
box.style.width = "200px";
box.style.backgroundColor = "green";


// 10. Get the email entered in an input with id "email" and print it in the console.
function showEmail() {
 const email = document.querySelector("#email").Value;
 console.log("emailValue");

}

// 11. Select a paragraph and update its font size to 24px.
const para = document.querySelector("#para");
function changefontsize() {
para.style.fontsize = "25px";
}

// 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting"
const name = document.querySelector("#fullName.Value");
function showGreeting () {
document.querySelector("#greeting").innerHTML = "Hello, " + name;

} 

// 13. Select an image with id "profilePic" and change its src to another image URL.
const img = document.querySelector("#profilePic");
function changeImage() {
img.src = "https://i.ytimg.com/vi/MmWRIfRZNz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCiOJS5_o246qFpxYDPGW_jGrk9uA";

}

// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display
// "Agreed" or "Not Agreed" in a paragraph.
function checkAgreement() {
const checkbox = document.querySelector("#agree");
const result = document.querySelector("#result");

if(checkbox.checked){
result.innerHTML = "Agreed";
} else {
result.innerHTML ="Not agreed";
}
}


// 16. Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.
function getselectedValue() {

let dropdown = document.querySelector("#options");

let selectedValue = dropdown.value;

document.querySelector("selectedValue").innerHTML = selectedValue;
}


// 17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".
function showDateTime() {
 let now = new Date();
 document.querySelector("#dateTime").innerHTML = now;

}


// 18. Select a paragraph with id "togglePara" and hide it (set display: none).
function hideParagraph() {
document.querySelector("#togglePara");
togglePara.style.display = "none";

}


// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.
function checkEligibility(){
const age = document.querySelector("#age");
const eligibility = document.querySelector("#eligibility");

if (age >= 18){
result.innerHTML = "Eligible";
} else {
result.innerHTML = "Not Eligible";

}
}


// 20. When a button is clicked, clear the value of an input with id "searchBox".
function clearSearch (){
document.querySelector("#searchBox").value = "";

}


