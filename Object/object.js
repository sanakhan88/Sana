//1. Display Student Info
//Given an array of student objects, display each student’s name and marks in a table using DOM.
let student = [
{Name: "Sana", Marks: "85" },
{Name: "Ali", Marks: "60" },
{Name: "Hira", Marks: "70" },
];

function show() {
const table = document.querySelector("#tb");

for (let s of student) {
table.innerHTML +=`<tr>
                   <td>${s.Name}</td>
                   <td>${s.Marks}</td>
</tr>`;

}

}


//2. Find Top Scorer
//From a list of student objects with names and scores, find and display the top scorer.
let students = [
{Name: "Sana", score: "90" },
{Name: "Ali",  score: "80" },
{Name: "Hira", score: "70" },
];

function TopScorer() {
let top = students[0];

for (let s of students) {
if (s.score > top.score){

top =s;
}
}
console.log("Top scorer:" , top.Name, top.score);

}
TopScorer();


//3. Filter Products by Price Range
//Create a function that takes a min and max price and filters an array of product objects accordingly.
let products =[
{name: "laptop", price: "1500"},
{name: "mouse", price: "900"},
{name: "tablet", price: "800"},
{name: "headphones", price: "700"},
 ];

function PriceFilter(minprice, maxprice) {
return products.filter(product =>
(product.price) >= minprice && (product.price) <= maxprice
);
}
console.log(PriceFilter(700,800));


//6. Sort Products by Price
//Display a list of products sorted by price (ascending/descending toggle via button).
let product = [
{name: "laptop", price: "800"},
{name: "mouse", price: "700"},
{name: "tablet", price: "600"},
{name: "headphones", price: "500"},
 ];
 const list = document.querySelector("#list");
 const btn = document.querySelector("#togglebtn");
 let asc = true;

 function show() {
list.innerHTML = "";
product.sort((a,b) => asc ? a.price - b.price : b.price - a.price)
 .forEach(p => list.innerHTML += `<li>${p.name} - $${p.price}</li>`);
}

 btn.onclick = () => {
     asc = !asc; 
     btn.textContent = asc ? "Sort Ascending" : "Sort Descending"; show(); }
 show();


 //7. Dynamic Form Inputs to Object
//Create a form with name, email, and age. On submit, convert the input into an object and show the result.
const form = document.querySelector("#userForm");
const result = document.querySelector("#result");

form.addEventListener("Submit" , function(e) {

    e.preventDefault();

const user = {
name: document.querySelector("#name").value,
name: document.querySelector("#email").value,
name: document.querySelector("#name").value

};
result.innerHTML =JSON.stringify(user);
console.log(user);
});


//8. Render Nested Object Data
//Given a nested object like a user with address, display all info in a structured format in the DOM.
const user = {
name: "Sana",
email: "sana@gmail.com",
age: "30",
address: {
street: "123 main street",
city: "Quetta",
country: "pakistan",
}
};
const userinfo = document.querySelector("#userInfo");

let html = 
`<p>Name: ${user.name}</p>
<p>Email: ${user.emial}</p>
<p>Age: ${user.age}</p>
<p>Adress:</p>
<ul>
<li>Street: ${user.address.street} </li>
<li>City: ${user.address.city} </li>
<li>Country: ${user.address.country} </li>

</ul>
`;
userinfo.innerHTML = html;

//10. Checkbox Filter
//Display a list of items. Use checkboxes to filter them (e.g., categories like "Fruits", "Vegetables").
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Spinach", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Potato", category: "Vegetable" }
];

const itemList = document.getElementById("listItem");
const checkboxes = document.querySelectorAll(".filter-checkbox");

// Function to display items
function displayItems(filteredItems) {
  itemList.innerHTML = "";
  filteredItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.classList.add("item");
    itemList.appendChild(li);
  });
}

// Function to filter items based on checked categories
function filterItems() {
  const checkedCategories = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  if (checkedCategories.length === 0) {
    displayItems(items); // show all if nothing is checked
  } else {
    const filtered = items.filter(item => checkedCategories.includes(item.category));
    displayItems(filtered);
  }
}

// Add event listeners to checkboxes
checkboxes.forEach(cb => cb.addEventListener("change", filterItems));

// Display all items initially
displayItems(items);


//️ DOM Interaction + Objects + Events
//11. Live Search List From an array of names or products, filter the list as the user types into an input field.
let prodcts = [
  {name: "Apple"},
  {name: "Banana"},
  {name: "Orange"},
  {name: "potato"},
  {name: "tomato"},
  {name: "carrot"},
];

let searchInput = document.querySelector("#search");
let resultList = document.querySelector("#result");

function displayList(list) {
  resultList.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    resultList.appendChild(li);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayList(filtered);
});

displayList(products);


//13. Form to Object Array
//Let users submit a form multiple times. Store each entry as an object in an array and display all entries in real time.
const userForm = document.getElementById("userForm");
const entryList = document.getElementById("entryList");
let entries = []; 

function displayEntries() {
  entryList.innerHTML = "";
  entries.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${entry.name}, Email: ${entry.email}`;
    entryList.appendChild(li);
  });
}

userForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    entries.push({ name, email }); 
    displayEntries(); 
    userForm.reset(); 
  }
});


//14. Edit Object in List Display a list of users with "Edit" buttons. On click, allow editing and update the object and UI.
let users = [];    
let editIndex = -1;

function saveUser() {
    let input = document.getElementById("userInput");

    if (editIndex === -1) {
        users.push({ name: input.value }); 
    } else {
        users[editIndex].name = input.value; 
        editIndex = -1;
    }

    input.value = "";
    showUsers();
}

function showUsers() {
    let list = document.getElementById("userList");
    list.innerHTML = "";

    users.forEach((user, i) => {
        list.innerHTML += `
        <li>
            ${user.name}
            <button onclick="editUser(${i})">Edit</button>
        </li>`;
    });
}

function editUser(i) {
    document.getElementById("userInput").value = users[i].name;
    editIndex = i;
}


//15. Dynamic Table Generator Given an array of objects, generate a table with headers based on object keys and rows based on values.
const data = [ 
{name: "Sana", age: "30", city: "Quetta"},
{name: "Sara", age: "25", city: "Lahore"},
{name: "Hira", age: "20", city: "Karachi"},

];

const table = document.querySelector("#mytbl");
let headerRow = "<tr>";

for(let key in data[0]) {
headerRow += `<th>${key}</th>`;
}

headerRow += "</tr>";
table.innerHTML = headerRow;

data.forEach(obj => {
  let row = "<tr>";
  for (let key in obj) {
    row += `<td>${obj[key]}</td>`;
  }
  row += "</tr>";
  table.innerHTML += row;
});


//Problem Solving / Deeper Logic 16. Frequency of Characters Take an input string, count character frequencies using an object, and display results.

function countCharacters() {
const text = document.querySelector("#input").value.toLowerCase();
const freq = { };

for(let char of text) {

if(char !== " ") {

  freq[char] = (freq[char] || 0 ) + 1;

}

}
let output = "";
for(let key in freq) {

output += `${key} : ${freq[key]} <br>`;

}
document.querySelector("#result").innerHTML = output;

}


//17. Nested Category Display Render categories and subcategories from a nested object structure using recursion  (tree view style).
const categories = [
  { name: "Electronics", sub: [
      { name: "Mobile", sub: [{ name: "Android" }, { name: "iPhone" }] },
      { name: "Laptops" }
    ]
  },
  { name: "Clothes", sub: [
      { name: "Men" },
      { name: "Women", sub: [{ name: "Dresses" }, { name: "Tops" }] }
    ]
  },
  { name: "Books" }
];

function renderTree(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    const label = document.createElement('span');
    label.textContent = item.name;
    label.className = 'label';

    if (item.sub && item.sub.length) {
      li.classList.add('has-children');
      li.appendChild(label);
      const childWrap = document.createElement('div');
      childWrap.className = 'children';
      childWrap.appendChild(renderTree(item.sub));
      li.appendChild(childWrap);

      // toggle expand/collapse on click
      label.addEventListener('click', () => {
        li.classList.toggle('expanded');
        childWrap.style.display = li.classList.contains('expanded') ? '' : 'none';
      });

      // start collapsed
      childWrap.style.display = 'none';
    } else {
      li.appendChild(label);
    }
    ul.appendChild(li);
  });
  return ul;
}

document.getElementById('tree').appendChild(renderTree(categories));


//18. Sort by Multiple Properties Sort an array of student objects first by grade, then by name if grades are equal.

let studnts = [

{name: "Sana", grade: "90"}, 
{name: "Ali", grade: "80"}, 
{name: "Sara", grade: "70"}, 

];

studnts.sort((a,b) =>
a.grade - b.grade || b.name.localeCompare(a.name)
);
console.log(studnts);


//19. Search and Highlight Search through an array of paragraph texts, highlight matches using DOM manipulation.

let paragraph = [
  "Javascript is a programming language.",
  "DOM manupulation is powerfull.",
  "Searching text and highlighting is easy."
];

const reslt = document.getElementById("reslt");

paragraph.forEach(t => {
  const p = document.createElement("p");
  p.textContent = t;
  reslt.appendChild(p);
});

function doSearch() {
  const term = document.getElementById("search").value.toLowerCase();
  const paras = document.querySelectorAll("p");

  paras.forEach(p => {
    let text = p.textContent;
    if(term && text.toLowerCase().includes(term)) {
      p.innerHTML = text.replace(new RegExp(term, "gi"), m => `<mark>${m}</mark>`);
    } else {
      p.innerHTML = text;
    }
  });
}


//20. Custom Dropdown from Object Data Use a country object ({code: "IN", name: "India"}) to populate a dropdown. On select, show selected country's details.

const countries = [
  {code: "PK", name: "Pakistan"},
  {code: "IN", name: "India"},
  {code: "UAE", name: "Dubai"},
];

const select = document.querySelector("#country");
const info = document.querySelector("#info");

countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.code;
  opt.textContent = c.name;
  select.appendChild(opt);
});

function showDetails() {
  const code = select.value;
  const country = countries.find(c => c.code === code);
  info.textContent = `Code: ${country.code}, Name: ${country.name}`;
}

