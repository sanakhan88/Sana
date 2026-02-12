const apiKey = "96849a6c75134d67906164803261701";

async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "Enter a city name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );

    const data = await response.json();

    if (data.error) {
      result.innerHTML = "City not found";
      return;
    }

    result.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <div class="temp">${data.current.temp_c}°C</div>
      <p>${data.current.condition.text}</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>🌬 Wind: ${data.current.wind_kph} kph</p>
    `;
  } catch (err) {
    result.innerHTML = "Something went wrong!";
  }
}
    

