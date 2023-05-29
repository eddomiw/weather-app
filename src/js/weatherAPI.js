import { searchValue, myForm } from "./search-location";

const weatherCondition = document.querySelector(".weather-condition");
const weatherLocation = document.querySelector(".weather-location");
const temp = document.querySelector("#temp");

const feelsLIke = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

export async function getWeather(searchValue) {
  try {
    const weatherResponse = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=1536e67c0bc746bd870180205231905&q=" +
        searchValue +
        "&aqi=no",
      { mode: "cors" }
    );

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    weatherCondition.textContent = weatherData.current.condition.text;
    weatherLocation.textContent = weatherData.location.name;
    temp.textContent = `${weatherData.current["temp_f"]} °F`;

    feelsLIke.textContent = `${weatherData.current["feelslike_f"]} °F`;
    humidity.textContent = `${weatherData.current.humidity}% `;
    wind.textContent = `${weatherData.current.wind_mph} mph`;
  } catch (error) {
    console.log(error);
  }
}
