
//1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console. 
let fruit = ["apple", "banana", "cherry"];
for(let i=0; i < fruit.length; i++) {
console.log(fruit[i]);

}

//2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector. 

let color = ["red", "green", "blue"];
let output = document.querySelector("#output");
for(let i=0; i<color.length; i++) {
output.innerHTML += color, i ;
}


//3. Use a for loop to print numbers from 1 to 10 in the browser console.

for(let i=0; i<=10; i++) {
console.log("Hello Pakistan", i);

}


//5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas. 
let names = ["Ali", "Sara", "Ahmed"];
let name = document.querySelector("#name");
for(let i=0; i<names.length; i++) {
name.innerHTML += names, i ;

}

//6. Change the text of a paragraph with ID status to "Loading..." using document.querySelector. 

document.querySelector("#status").innerHTML = "Loading. . .";

//7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in a paragraph with ID sum. 
let arraynum = [5, 10, 15];
let totalsum = 0;
for(let i=0; i < arraynum.length; i++) {

totalsum += arraynum[i];
document.querySelector("#sum").innerHTML = "The sum of a num is:" + totalsum;

}

//8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities. 
let cities = ["Karachi", "Lahore", "Quetta"];
for (let i=0; i< cities.length; i++) {
 console.log(cities[i]);  
document.querySelector("#cities").innerHTML = cities; 
}


//9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
for(let i=1; i <= 20; i++) {
if(i % 2 == 0) {
console.log(i);

}
}

//10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the largest number in a paragraph with ID max. 
let numbers = [45, 22, 89, 100];
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
if(numbers[i] > largest) {
largest = numbers[i];
}

}
document.querySelector("#max").innerHTML = "largest number:" + largest;


//11. Use document.querySelector to select a div with ID result and change its text to "Task Complete". 
document.querySelector("#result").innerHTML = "Task complete";


//12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it inside an element with ID averageTemp. 
let  temperatures = [30, 35, 32, 40];
let total = 0;
for(let i=0; i < temperatures.length; i++) {
total += temperatures[i];
let average = total / temperatures.length;
document.querySelector("#averageTemp").innerHTML = "average temperature: " + average;


}


//13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID totalSum. 
let sum = 0;
for(let i=1; i<= 100; i++) {
sum += i;
document.querySelector("#totalSum").innerHTML = "totalSum:" + sum;
}

//14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with ID animals.
let animals = ["dog", "cat", "bird"];
let value = "";
for(let i=0; i < animals.length; i++) {
value += animals[i];
document.querySelector("#animals").innerHTML = value;
}


//15. Use document.querySelector to select a heading with ID title and change its text to "Welcome to JavaScript!". 
document.querySelector("#title").innerHTML = "Welcome to JavaScript!";


//16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log them to the console. 
for (let i=1; i <= 50; i++ ){
    if(i % 5 === 0){
console.log(i);
    }
}


//17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and display the count in a div with ID highScores. 
let scores =  [80, 60, 90, 70];
let count =0;
for(let i=0; i<scores.length; i++) {
if (scores [i] > 75 ){
count++;
}
}
document.querySelector("#highScores").innerHTML = "scores are above 75: " +count;



//18. Select an element with ID message and change its text to "Updated successfully" using document.querySelector. 
document.querySelector("#message").innerHTML = "Updated successfully";