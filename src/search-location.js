export const myForm = document.querySelector("#search-form");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector("#search-bar");

export let searchValue = "beans";

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchValue = searchInput.value;
  console.log(searchValue);
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchValue = searchInput.value;
  console.log(searchValue);
  console.log("Enter key pressed!");
});
