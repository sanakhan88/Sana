// 1. Create an array of 3 student names and add one more using push().
let student = ['Sana', 'Kushaf', 'Aisha', 'Ahmed', 'Fateh'];
student.push('Jiya');
console.log(student);

// 2. Remove the last item from an array of fruits using pop().
let fruits =['apple', 'banana', 'grapes', 'orange', 'mango'];
fruits.pop();
console.log(fruits);

// 3. Add "Monday" to the beginning of a days array using unshift().
let days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.unshift('Monday');
console.log(days);

// 4. Remove the first item from an array of colors using shift().
let colors = ['black', 'white', 'red', 'green','blue', 'pink'];
colors.shift();
console.log(colors);

// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
let subjects = ['english', 'computer'];
let result = subjects.splice(1, 0, 'math', 'science');
console.log(subjects);


// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.

let city = ['lahore', 'karachi', 'multan', 'quetta'];
city.splice(1, 2);
console.log(city);



// 7. Use slice() to get the first 3 items from a countries array.

let countries = ['pakistan','china','turkey','Saudi Arabia', 'iran'];
let firstthree = countries.slice(0, 3);
console.log(firstthree);


// 8. Convert the string "apple,banana,mango" into an array using split().

let words = "apple,banana,mango";
let array = words.split(",");
console.log(array);



//9. Join an array of characters ['J','S'] into a single string using join().
let characters = ['J','S'];
let hello = characters.join("");
console.log(hello);


//10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat().
let arr1 = ['pen','pencil'];
let arr2 = ['eraser','sharpener'];
let merged = arr1.concat(arr2);
console.log(merged);


//11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
let numbers = [10, 5, 2, 8];
numbers.sort();
console.log(numbers);


//12. Sort an array of names alphabetically using sort().
let names = ["Sara", "Benish", "John", "Aliya"];
names.sort();
console.log(names);


//13. Reverse the order of an array of numbers using reverse().
let num = [4,6,8,9,2,0,1];
num.reverse();
console.log(num);


//14. Use indexOf() to find the index of "Blue" in a colors array.
let clr = [ 'white','green', 'blue', 'black'];
console.log(clr.indexOf('blue'));
console.log(clr.indexOf('hello'));
console.log(clr.indexOf('world'));


//15. Add three new items to an empty array using push().
let threeitem = [ ];
 threeitem.push('ring', 'braclet', 'nose pin');
console.log( threeitem);


//16. Remove the middle item from an array of 5 numbers using splice().
let  middleitem = [10,20,30,40,50];
 middleitem.splice(2,1);
 console.log( middleitem);


// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
let sent = "HTML CSS JavaScript";
let ar = sent.split(" ");
console.log(ar);


//18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
let alpha =  ['a', 'b', 'c'];
alpha.reverse();
console.log(alpha);
console.log(alpha.join('-'));


//19. Check if "Karachi" exists in an array using indexOf() and show its index.
let cities = ['lahore', 'karachi', 'quetta', 'multan'];
let res = cities.indexOf('karachi');
console.log(res);


//20. Concatenate two arrays of even and odd numbers using concat() and then reverse.
let even = [2,4,6,8];
let odd = [1,3,5,7];
let merge = even.concat(odd);
console.log(merge);
console.log(merge.reverse());



