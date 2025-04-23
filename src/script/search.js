class Search {
  constructor(input, searchBtn) {
    this.inputElement = document.querySelector(input)
    this.searchBtn = document.querySelector(searchBtn)
  }

  handleClick() {
    const inputValue = this.inputElement.value.trim();

    if (inputValue === "") {
      this.inputElement.style.border = "2px solid #950000"
    } else {
      alert(`Você buscou por: ${inputValue}`)
      this.inputElement.style.border = ""
    }

  }

  addClickSearch() {
    this.searchBtn.addEventListener("click", (ev) => {
      ev.preventDefault(); // Evita o envio do formulário e mantém a interação correta
      this.handleClick();
    });

  }

  init() {
    if (this.inputElement && this.searchBtn) {
      this.addClickSearch()
    }
    return this
  }
}

const search = new Search(
  ".search-input",
  ".search-button"
)

search.init()