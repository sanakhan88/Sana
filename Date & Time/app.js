//1. Custom Date Formatter
//Write a function that takes a Date object and returns a formatted string like: "Saturday, 9 August 2025".
function formatCustomDate(date) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

let d = new Date(2025, 7, 9);
console.log(formatCustomDate(d));


//2. Elapsed Time in Minutes
//Given two timestamps, calculate how many minutes have passed between them.

function ElapsedTime(startTime , endTime ){
let start = new Date(startTime);
let end = new Date(endTime);

let difference = end - start;

return difference / 60000;
}
console.log(ElapsedTime("2025-08-09T10:00:00", "2025-08-09T10:45:00"));


//3. Age Calculator from Full Birthdate
//Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in years, months, and days.

function calculateAge(username , Birthdate) {
let currentDate = new Date().getTime();
let userBirthDate = new Date(Birthdate).getTime();

let remainingMillisecond = currentDate - userBirthDate;

let userAgeInYear = remainingMillisecond / 1000 / 60 / 60 / 24 / 365

console.log(username + " age in year =>" + Math.round(userAgeInYear));


}
calculateAge("Ali" , "September 9 , 1999")


//4. Get First Day of Current Month
//Return the date of the first day of the current month.
function  GetFirstDay(){
let today = new Date();
let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
return firstDay;

}
console.log(GetFirstDay());


//5. Get Last Day of Current Month
//Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.
function  GetLastDay() {
let today = new Date();
let lastDay = new Date(today.getFullYear(), today.getMonth() + 1 , 0)
return lastDay;

}
console.log(GetLastDay());


//8. Time Difference in Hours and Minutes
//Given two dates, return the difference in hours and minutes, like: "3 hours 25 minutes".

function TimeDifference(start, end) {
let diff = new Date(end) - new Date(start);
let hours = Math.floor(diff /1000 / 60 /60);
let minutes = Math.floor(diff /1000 / 60 )  % 60;
return `${hours} hours ${minutes} minutes`;

}
console.log(TimeDifference("2025-11-25T10:00:00", "2025-11-25T13:25:00"));


//9. Check if Date is Weekend or Weekday
//Write a function that returns "Weekend" or "Weekday" based on a givenc.
function Checkday(dateString) {
let day = new Date(dateString).getDay();
return (day === 0 || day === 6) ? "Weekend" : "Weekday";

}
console.log(Checkday("2025-11-25"));
console.log(Checkday("2025-11-30"));

//10. Compare Birthdays
//Ask for two people’s birthdates and return who is older and by how many years/days.
function CompareBirthdays(b1,b2) {
let d1 = new Date(b1) , d2 = new Date(b2);
  const older = d1 < d2 ? "Person 1" : "Person 2";

let days = Math.floor(Math.abs(d1-d2) / (1000 * 60 * 60 * 24));
let years = Math.floor(days / 365);
return `${older} is older by ${years} years (${days} days)`;

}
console.log(CompareBirthdays("2000-05-10", "1998-03-25"));


//11. Recurring Alarm Checker
//Given a day and time (e.g., "Monday 08:00"), check if the current date/time matches that schedule.
function AlarmChecker(Schedule) {
let [day, time] = Schedule.split(" ");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let now = new Date();
return (day === days[now.getDay()] && time === now.toTimeString().slice(0,5)) ? "Alarm!" : "No Alarm";
}
console.log(AlarmChecker("Monday 08:00"));


//12. Date Validator
//Write a function that checks whether a given date string is a valid date (e.g., using Date.parse() or new Date()).
function  Validator(datestr) { 
let date = new Date(datestr);
if (isNaN(date.getTime())) {
return false;

}
return true;
}
console.log(Validator("2025-11-30"));

//13. Custom Relative Date Formatter
// Given a timestamp, format it as:
// ● "Today at 3:45 PM"
// ● "Yesterday at 11:00 AM"
// ● "4 days ago"
// depending on how recent it is.


//14. Generate Dates for the Next 7 Days
//Return an array of dates (in DD-MM-YYYY format) for the next 7 days from today.
function Next7Days() {
  let array = [];
  let time = new Date();

  for (let i = 0; i < 7; i++) {
    let date = new Date(time); // ← Fixed (capital D)
    date.setDate(time.getDate() + i);

    array.push(
      date.getDate().toString().padStart(2, "0") + "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") + "-" +
      date.getFullYear()
    );
  }

  return array;
}

console.log(Next7Days());


//15. Time Slot Generator
//Create a function that generates available 30-minute time slots between 9 AM to 5 PM for a specific date.
function SlotGenerator(dateStr) {
  let slots = [];
  let start = new Date(dateStr + " 09:00");
  let end = new Date(dateStr + " 17:00");

  while (start < end) {
    slots.push(start.toTimeString().slice(0, 5));
    start.setMinutes(start.getMinutes() + 30);
  }

  return slots;
}

console.log(SlotGenerator("2025-11-26"));


//16. Monthly Calendar Dates
//Return an array of all dates in the current month (e.g., ['01-08-2025','02-08-2025', ...]).
function monthlyDates() {
  let date = new Date(), dates = [];
  let lastDay = new Date(date.getFullYear(), d.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= lastDay; i++) {
    dates.push(
      String(i).padStart(2,"0") + "-" +
      String(date.getMonth()+1).padStart(2,"0") + "-" +
      date.getFullYear()
    );
  }

  return dates;
}

console.log(monthlyDates());


//17. Convert UTC Date to Local Time
//Given a UTC date string, convert it to local date/time format.
function UTCDate(UTCStr) {
let date = new Date(UTCStr);
return date.toLocaleString();
}
console.log(UTCDate("2025-11-26T12:00:00Z"));


//18. Measure Function Execution Time
//Use Date.now() to measure how long a loop/function takes to execute.
function ExecutionTime() {
  let start = Date.now();

for(let i= 0 ; i < 1000000 ; i++) {
}
let end = Date.now();
console.log("Excution time: " + (end - start) + "ms");
 }
ExecutionTime();

//19. Format Date as ISO String Without Time
//Format the current date as YYYY-MM-DD (without time), using a custom formatter.
function  ISOString() {
let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, '0');
let day = String(today.getDate()).padStart(2, '0');
return `${year}-${month}-${day}`;

}
console.log(ISOString());


//20. Get the Number of Days in Any Month
//Write a function that takes a month and year, and returns how many days are in that month (handle leap years too).
function  monthandyear(month,year) {
return new Date(year,month,0).getDate();
}
console.log(monthandyear(2,2023));
console.log(monthandyear(2,2024));
console.log(monthandyear(82,2025));