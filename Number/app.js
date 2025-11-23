//1. Round a Number
//Round the number 4.7 using Math.round().
let number =  4.7;
console.log(Math.round(4.7));

//2. Ceil a Decimal
//Use Math.ceil() to round 5.3 up to the next whole number.
let  up = 5.3;
console.log(Math.ceil(5.3));

//3. Floor a Decimal
//Use Math.floor() to round 8.9 down to the previous whole number.
let down = 8.9;
console.log(Math.floor(8.9));

//4. Generate a Random Number (0–1)
//Create a function that returns a random number between 0 and 1 using Math.random().
function  RandomNumber(){
return Math.random();

}
console.log(RandomNumber());

//5. Random Integer (0–9)
//Generate a random whole number between 0 and 9.

let RandomInteger = Math.floor(Math.random() * 10);
console.log(RandomInteger);
//or
// function RandomInteger(){
// return Math.floor(Math.random() * 10);

// }
// console.log(RandomInteger);

//6. Random Integer (1–100)
//Generate a random integer between 1 and 100.
let Random = Math.floor( Math.random() *100) + 1;
console.log(Random );


//7. Convert String to Integer
//Use parseInt() to convert the string "42" into a number.
let  str =  "42";
let num = parseInt(str);
console.log(num);
console.log(typeof num);

//8. Convert String to Float
//Use parseFloat() to convert "3.14159" into a floating point number.
let str2 = "3.14159";
console.log(parseFloat(str2));


//9. Round User Input
//Take a number from a form input, round it, and display the result on the page.
let UserInput = 12.34;
console.log(Math.round( UserInput));


//11. Temperature Rounding
//Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().
let  Temperature = 36.6;
console.log(Math.round(Temperature));


//12. Ceil Shopping Price
//If the product price is $9.25, use Math.ceil() to charge the user $10.
let ShoppingPrice = 9.25;
console.log(Math.ceil(9.25));

//13. Parse and Add
//Convert two string numbers like "10" and "5.5" using parseInt() and parseFloat() and add them.
let  num1 = "10";
let  num2 = "5.5";
let int = parseInt(num1);
let flt = parseFloat(num2);
let nums = int + flt ;
console.log(nums);


//14. Random Even Number (2–20)
//Generate a random even number between 2 and 20.
let RandomEven = Math.floor(Math.random() * 10 + 1) * 2;
console.log(RandomEven);

//15. Check if Parsed Value is a Number
//Write a function that checks if parseInt(input) is a valid number (not NaN).
function  ParsedValue(input){
let Parsed = parseInt(input);

if(isNaN(Parsed)){
return false;


} else {

    return true;
}
}
console.log(ParsedValue("1234"));
console.log(ParsedValue("abcd"));
console.log(ParsedValue("100px"));


//16. Round All Prices in Array
//Given an array of prices with decimals, return a new array with all prices rounded.

let prices = [12.4, 44.7, 55.9];
let rounded = [];
for(let i=0; i < prices.length; i++){
rounded.push(Math.round( prices[i]));

}

console.log(rounded);


//17. Simulate Coin Toss
//Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
function CoinToss() {
  let RandomNumber = Math.random();
  if(RandomNumber < 0.5) {
    return "Head";
  } else {
    return "Tail";
  }
}
console.log(CoinToss());


//18. Random Integer within Range (Min–Max)
//Create a function that returns a random integer between any two numbers (inclusive).

function Integerwithin(min,max) {

min = Math.ceil(min);
max = Math.floor(max);

return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(Integerwithin(1,10));
console.log(Integerwithin(50,100));


//19. Extract Number from Text
//Use parseFloat() to extract the number from "Total: 45.90 USD".
let str1 = "Total: 45.90 USD";
let numbr = parseFloat(str1);
console.log(numbr);


//20. Round to Nearest 0.5
//Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).

function RoundtoNearest(num) {
return Math.round(num * 2) / 2;

}

console.log(RoundtoNearest(4.3 ));
console.log(RoundtoNearest(4.5));
console.log(RoundtoNearest(4.1));
console.log(RoundtoNearest(4.0));

