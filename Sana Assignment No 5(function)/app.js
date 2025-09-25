function addTwoNumbers( a , b ) {
return a +b;

}
console.log(addTwoNumbers( 4 , 5));



function subtractNumbers ( a , b ) {
return a - b;

}
console.log(subtractNumbers( 10 , 5));



function multiplyNumbers ( a , b ) {
return a * b;

}
console.log(multiplyNumbers ( 10 , 10));



function  divideNumbers( a , b ) {
return a / b;

}
console.log( divideNumbers (20 , 10));


function getRemainder( a , b ) {
return a % b;

}
console.log(getRemainder(20, 50));




function isPositive ( num) {

 if(num < 10 ){
 return "positive";

 } else {
 return "not positive";

 }
   
}
console.log(isPositive (5 , 2));
console.log(isPositive (-10 , 40));



function isNegative ( num) {

 if(num >  40 ){
 return "Negative";

 } else {
 return "Not Negative";

 }
   
}
console.log(isNegative(80 ,40));
console.log(isNegative(-100 , 20));



function checkEven(num) {
if(num > 20) {
return  "Even";

} else {
return "Odd";

}

}
console.log(checkEven(40 , 20));
console.log(checkEven(-10 , 20));



function isEqual(num) {
if(num >= 20) {
return  "Equal";

} else {
return  "Not Equal";

}

}
console.log(isEqual(20 , 20));
console.log(isEqual(-30 , 10));



function  compareNumbers(num) {
if(num > 20) {
return "Greater";

} else {
return "Smaller";

}

}
console.log(compareNumbers(30 ,40));
console.log(compareNumbers(10 , 5));



function getFullName( firstname , lastname) {

return firstname + " " + lastname;
}

console.log(getFullName("Sana" , "khan"));
console.log(getFullName("Sarah" , "khan"));




function getGrade(score) { 
  if (score >= 40 && score <= 100) {
return "pass";

  } else (score >= 0 && score < 40) 
return "fail";

  }
  
  console.log( getGrade(75));
  console.log( getGrade(35));
  console.log( getGrade(80));
  console.log( getGrade(60));


  function isTeenager(age) {
if (age <= 19){
return "Teenager";

}else
 return "Not a Teenager";

  }
console.log(isTeenager(13));
console.log(isTeenager(19));
console.log(isTeenager(20));



function  greetUser(name) {
return "Hello , " + name + "!"

} 
console.log( greetUser("Ahmed"));



function isEligibleToVote(age) {

if(age >= 18) {
return "Eligible";

} else
return "Not Eligible";

} 
console.log(isEligibleToVote(18));
console.log(isEligibleToVote(15));
console.log(isEligibleToVote(25));


function findAbsoluteValue(num) {
if (num < 10){
return -num

} else {
return num

}
} 

console.log(findAbsoluteValue(12));
console.log(findAbsoluteValue(0));
console.log(findAbsoluteValue(5));


function  checkTemperature(Temperature) {
if ( Temperature > 30) {
return "hot";

} else if (Temperature < 10) {
return "cold";

} else {

  return "Normal";

}

} 
console.log(checkTemperature(35));
console.log(checkTemperature(5));
console.log(checkTemperature(20));




function getTriangleType (a , b ,c) {
if ( a === b && b === c) {
return "Equilateral";

} else if (a===b || b===c || a===c) {
return "Isosceles";

} else {
 return "Scalene";

}
 
} 
console.log(getTriangleType(5  , 5 , 5));
console.log(getTriangleType(7 , 7));
console.log(getTriangleType(7 , 8 , 9));




function  calculateDiscountedPrice(price , discountpercentage) {
let discount = (price * discountpercentage ) / 100;
let finalprice = price - discount ;
return finalprice;

}
console.log(calculateDiscountedPrice(100 , 30));
console.log(calculateDiscountedPrice(100 , 50));



function isPasswordValid(password) {
  if(password > 8) {

return "Valid Password";
  } else {
return "Too Short";

  }
} 
console.log(isPasswordValid(12345678));
console.log(isPasswordValid(000000));
