//1. Lowercase Name 
//Write a function that takes a name as input and returns it all in lowercase. 
let username = "SaNa";
console.log(username.toLowerCase());

//2. Uppercase Shouting 
//Convert a given string into uppercase to simulate shouting. Example: "hello" → "HELLO".
let Shouting  = "hello";
console.log(Shouting.toUpperCase());

//3. Count Characters 
//Given a string, return the number of characters in it.
let Characters = "Hello world";
console.log(Characters.length);

//4. First Character 
//Write a function that returns the first character of a string using charAt().
let Character = "Javascript is a programming language";
console.log(Character.charAt());

//5. Last Character 
//Return the last character of any string using .charAt() and .length. 
let last = "Javascript is a programming language";
let lastchar = (last.charAt(7));
console.log(last.length-1);

//6. Find Position of Word 
//Given a sentence, find the position (index) of the word "apple" using indexOf.
const position = "I like apple juice";
console.log(position.indexOf("apple"));

//7. Extract First Word 
//Use slice() and indexOf() to extract the first word from a sentence.
const sentence = "Hello javascript";
console.log(sentence.indexOf(" "));
console.log(sentence.slice(0,5));

//8. Replace a Word 
//Replace the word "bad" with "good" in a given sentence using replace().
const word = "Javascript is a bad programming language";
console.log(word.replace("bad", "good"));

//9. Replace All Vowels 
//Replace all occurrences of vowels in a string with "*" using replaceAll().
const vowels = "Hello javascript";
console.log(vowels.replaceAll("Hello javascript" , "*"));

//10. Split Sentence into Words 
//Convert a sentence into an array of words using split(" ").
const Convert = "Split Sentence into Words";
console.log(Convert.split(" "));

//11. Capitalize First Letter 
//Capitalize only the first letter of a given word.
const letter = "javascript ";
console.log(letter.charAt(0).toUpperCase() + letter.slice(1));

//12. Find Second Word 
//Write a function that returns the second word of a sentence using split().
function secondword(sentence) {
const word = sentence.split(" ");
return word[1];
}
console.log(secondword("I love javascript"));

//13. Censor a Word 
//Replace all instances of a bad word like "dumb" in a string with "****". 
const Censor  = "You are dumb";
console.log(Censor.replaceAll("dumb", "****"));

//14. Count Words in Sentence 
//Use .split() and .length to count how many words are in a sentence. 
let Sentences = "This is a sample sentence";
let count =Sentences.split(" ");
let wordcount = count.length;
console.log(wordcount);

//15. Check if Word Exists 
//Return true if a specific word (e.g., "cat") exists in a string using indexOf. 
const exists = "I have a cat and a dog";
const wrd = "cat";
const sntence = exists.indexOf(wrd) !== -1;
console.log(sntence);

//16. Extract Domain from Email 
//Given an email address, extract and return the domain name (everything after @). 

function domain(email) {
return email.split("@")[1];

}
console.log( domain("username@domain.com"));

//17. Reverse Words in Sentence 
//Given a sentence, split it into words, reverse the array, and join it back into a string. 
let wrds = "Reverse Words in Sentence";
console.log(wrds.split(" ").reverse().join(" "));
//OR
function reversewords(sen) {
return sen.split(" ").reverse().join(" ");


}
console.log(reversewords("Reverse Words in Sentence"));


//18.Check Palindrome (Basic) 
//Write a function that checks if a word is the same when reversed (ignore case).

function  Palindrome(word) {
let lower = word.toLowerCase();
let reversed = lower.split("").reverse().join("");
return lower === reversed

}


//19. Count Vowels 
//Count how many vowels are in a given string using a loop and charAt.
function countVowels(str){
let count =  0;
let vowels = "aeiou";
for(let i=0; i < str.length; i++) {
let char =str.charAt(i);
if(vowels.indexOf(char)!== -1)  {

count++;
}

  }
return count;
}
console.log(countVowels("Hello world"));


//20. Alternate Case Converter 
//Convert a string to alternating case (e.g., "hello" → "HeLlO"). a. 

function AlternateCase(str) {
let result = "";
for(let i= 0; i < str.length; i++) {
result += i % 2 === 0
?str[i].toLowerCase()
: str[i].toLowerCase();

}
return result;

} 
console.log(AlternateCase("hello"));