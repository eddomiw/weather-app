export function showElements() {
  let hiddenSections = document.querySelectorAll(".hidden");
  console.log(hiddenSections);

  hiddenSections.forEach(function (element) {
    element.style.display = "flex";
  });
}
