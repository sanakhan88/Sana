const apiKey = "96849a6c75134d67906164803261701";

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const feels = document.querySelector("#feelsLike");
const icon = document.querySelector("#weatherIcon");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  console.log("City entered:", city);

  if (!city) 
    return;
  getWeather(city);
});

function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  console.log("API URL:", url);


  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("API DATA:", data);

      if (data.error) {
        alert("City not found");
        return;
      }

      city.innerHTML = data.location.name;
      temp.innerHTML = data.current.temp_c + " °C";
      condition.innerHTML = data.current.condition.text;
      humidity.innerHTML = data.current.humidity + "%";
      wind.innerHTML = data.current.wind_kph + " km/h";
      feels.innerHTML = data.current.feelslike_c + "°C";
      icon.src = "https:" + data.current.condition.icon;
    })
    .catch(err => console.error("Error:", err));
}


