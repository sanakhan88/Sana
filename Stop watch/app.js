
let timer;
let sec = 0;
let minute = 0;

const time = document.getElementById("time");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

start.onclick = () => {
  if (!timer) {
    timer = setInterval(() => {
      sec++;
      let h = String(Math.floor(sec / 3600)).padStart(2, "0");
      let m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
      let s = String(sec % 60).padStart(2, "0");
      time.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
  }
};

pause.onclick = () => {
  clearInterval(timer);
  timer = null;
};

reset.onclick = () => {
  clearInterval(timer);
  timer = null;
  sec = 0;
  time.innerHTML = "00:00:00";
};
