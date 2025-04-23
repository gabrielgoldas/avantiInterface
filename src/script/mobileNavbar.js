class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, exitBtn, togglerBtn, departmentBtn, categoryList) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelector(navLinks)
    this.exitBtn = document.querySelector(exitBtn)
    this.togglerBtn = document.querySelector(togglerBtn)

    this.departmentsBtn = document.querySelectorAll(departmentBtn)
    this.categoryList = document.querySelectorAll(categoryList)

    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
    this.handleClickDp = this.handleClickDp.bind(this)
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.togglerBtn.classList.toggle(this.activeClass)
    this.exitBtn.classList.toggle(this.activeClass)
    this.closeCategories()
  }

  closeCategories() {
    this.categoryList.forEach(category => {
      if (category.classList.contains("active")) {
        category.classList.remove("active")
        this.navList.classList.toggle(this.activeClass)
        this.togglerBtn.classList.toggle(this.activeClass)
        this.exitBtn.classList.toggle(this.activeClass)
      }
    })
  }

  handleClickDp(event) {
    document.querySelectorAll(".category-list.active").forEach(category => {
      category.classList.remove(this.activeClass);
    });

    const department = event.currentTarget;
    const categoryList = department.querySelector(".category-list");

    if (categoryList) {
      categoryList.classList.toggle(this.activeClass);
    }
  }

  addClickEventMobileMenu() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  addClickEventDepartmentBtn() {
    this.departmentsBtn.forEach(dpBtn => {
      dpBtn.addEventListener("click", this.handleClickDp)
    })
  }

  initMobileMenu() {
    if (this.mobileMenu) {
      this.addClickEventMobileMenu()
    }
    return this
  }

  initDepartmentBtn() {
    if (this.departmentsBtn) {
      this.addClickEventDepartmentBtn()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  ".navbar-toggler-btn",
  ".nav-list",
  "nav-list li",
  "#exit-btn",
  "#toggler-btn",
  ".department",
  ".category-list"
);
mobileNavbar.initMobileMenu()
mobileNavbar.initDepartmentBtn()