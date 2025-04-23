const arrowsText = document.querySelectorAll(".arrows-text")
const arrowsBtn = document.querySelectorAll(".arrow-button")

arrowsBtn.forEach(arrowBtn => {
  arrowBtn.addEventListener('click', (ev) => toggleArrowDiv(ev.currentTarget))
})


function toggleArrowDiv(button) {
  const arrowDiv = button.closest(".arrows-text")
  const arrowsList = arrowDiv.nextElementSibling;
  const arrowDown = button.querySelector(".arrow-down")
  const arrowUp = button.querySelector(".arrow-up")

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
