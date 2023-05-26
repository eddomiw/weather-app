import { searchValue, myForm } from "./search-location";

export async function getWeather(searchValue) {
  try {
    const weatherResponse = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=1536e67c0bc746bd870180205231905&q=London&aqi=no",
      { mode: "cors" }
    );

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    console.log(weatherData.current.cloud);
  } catch (error) {
    console.log(error);
  }
}
