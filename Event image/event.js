function test() {
console.log("testing....");
}

const h1 = document.querySelector("#head");

h1.addEventListener("click" , test)

const btn = document.querySelector("#btn");

btn.addEventListener("click" , function() {

console.log("working...");

})

btn.addEventListener("mouseover" , function() {
console.log("bulb on...");

})

btn.addEventListener("mouseout" , function() {
console.log("bulb off...")

})


const img = document.querySelector("#img");

img.addEventListener("mouseover" , function() {
console.log("bulb on...");
img.src= "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940171g57vp25a8k.png"

});

img.addEventListener("mouseout" , function() {
console.log("bulb off...");
img.src= "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png"

});



