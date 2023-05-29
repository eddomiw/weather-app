import { getWeather } from "./weatherAPI";
import { showElements } from "./hidden-display";

export const myForm = document.querySelector("#search-form");
export const searchInput = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".searchBtn");
export let searchValue = " ";

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchValue = searchInput.value;
  getWeather(searchValue);
  showElements();
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchValue = searchInput.value;
  getWeather(searchValue);
  showElements();
});
