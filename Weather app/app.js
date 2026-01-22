const apiKey = "96849a6c75134d67906164803261701";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const feelsEl = document.getElementById("feelsLike");
const iconEl = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  console.log("City entered:", city);

  if (!city) return;
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

      cityEl.innerText = data.location.name;
      tempEl.innerText = data.current.temp_c + " °C";
      conditionEl.innerText = data.current.condition.text;
      humidityEl.innerText = data.current.humidity + "%";
      windEl.innerText = data.current.wind_kph + " km/h";
      feelsEl.innerText = data.current.feelslike_c + "°C";
      iconEl.src = "https:" + data.current.condition.icon;
    })
    .catch(err => console.error("Error:", err));
}
