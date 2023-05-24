export const searchBtn = document.querySelector(".searchBtn");
export const searchInput = document.querySelector("#search-bar");
export let searchValue = "beans";

searchBtn.addEventListener("click", function () {
  searchValue = searchInput.value;
  console.log(searchValue);
});
