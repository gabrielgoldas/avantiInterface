const arrowsText = document.querySelectorAll(".arrows-text")

arrowsText.forEach(arrowText => {
  arrowText.addEventListener('click', () => toggleArrowDiv(arrowText))
})


function toggleArrowDiv(arrowText) {
  const arrowDiv = arrowText.parentElement;
  const arrowsList = arrowDiv.querySelector(".arrows-list");
  const arrowDown = arrowDiv.querySelector(".arrow-down")
  const arrowUp = arrowDiv.querySelector(".arrow-up")

  if (arrowsList.classList.contains("active")) {
    arrowsList.classList.remove("active")
    arrowsList.style.display = "none"
    arrowDown.style.display = "block"
    arrowUp.style.display = "none"
  } else {
    arrowsList.classList.add("active")
    arrowsList.style.display = "block"
    arrowDown.style.display = "none"
    arrowUp.style.display = "block"
  }
}
