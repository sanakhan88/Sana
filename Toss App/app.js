
const para = document.querySelector("#result");
const img = document.querySelector("img");
function toss(userInput) {
console.log(userInput);

let randomNumber = Math.ceil(Math.random() * 2)
console.log(randomNumber);

if(
    (userInput === "masjid" && randomNumber === 1) ||
    (userInput === "chand" && randomNumber === 2)) {
        
console.log("user toss jeet gaya");
para.innerHTML = "You won the toss!";

} else {
    console.log("user toss har gaya");
para.innerHTML = "You loss the toss!";

}

if (randomNumber === 1 ) {
img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg";

} else {
img.src = "https://i.ebayimg.com/images/g/7gcAAOSw6A1hoOxs/s-l1200.jpg";

}

}