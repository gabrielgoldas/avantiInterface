class MobileNavbar {
  constructor(
    mobileMenu, navList, navLinks, exitBtn, togglerBtn, departmentBtn, categoryList, departmentsBtnRow, categoryListRow
  ) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelector(navLinks)
    this.exitBtn = document.querySelector(exitBtn)
    this.togglerBtn = document.querySelector(togglerBtn)

    this.departmentsBtn = document.querySelectorAll(departmentBtn)
    this.categoryList = document.querySelectorAll(categoryList)

    this.departmentsBtnRow = document.querySelectorAll(departmentsBtnRow)
    this.categoryListRow = document.querySelectorAll(categoryListRow)

    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
    this.handleClickDp = this.handleClickDp.bind(this)
    this.handleClickDpRow = this.handleClickDpRow.bind(this)
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
        category.parentElement.style.color = "#000";
        category.parentElement.style.fontWeight = "400";
        this.navList.classList.toggle(this.activeClass)
        this.togglerBtn.classList.toggle(this.activeClass)
        this.exitBtn.classList.toggle(this.activeClass)
      }
    })
  }

  handleClickDp(event) {
    document.querySelectorAll(".category-list.active").forEach(category => {
      category.classList.remove(this.activeClass);
      category.parentElement.style.color = "#000";
      category.parentElement.style.fontWeight = "400";
    });

    const department = event.currentTarget;
    const categoryList = department.querySelector(".category-list");

    if (categoryList) {
      const isActive = categoryList.classList.toggle(this.activeClass);

      if (isActive) {
        categoryList.parentElement.style.color = "#005cff";
        categoryList.parentElement.style.fontWeight = "700";
      }
    }
  }

  handleClickDpRow(event) {
    const departmentRow = event.currentTarget;
    const categoryListRow = departmentRow.querySelector(".category-list-row");

    if (categoryListRow) {
      const isActive = categoryListRow.classList.contains(this.activeClass);

      document.querySelectorAll(".category-list-row.active").forEach(category => {
        category.classList.remove(this.activeClass);
        category.parentElement.style.color = "#000";
        category.parentElement.style.fontWeight = "400";
      });

      if (!isActive) {
        categoryListRow.classList.add(this.activeClass);
        departmentRow.style.color = "#005cff";
        departmentRow.style.fontWeight = "700";
        categoryListRow.querySelector(".div-categories").style.color = "#000";
      }
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

  addClickEventDepartmentBtnRow() {
    this.departmentsBtnRow.forEach(dpBtnRow => {
      dpBtnRow.addEventListener("click", this.handleClickDpRow)
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

  initDepartmentBtnRow() {
    if (this.departmentsBtnRow) {
      this.addClickEventDepartmentBtnRow()
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
  ".category-list",
  ".department-row",
  ".category-list-row"
);
mobileNavbar.initMobileMenu()
mobileNavbar.initDepartmentBtn()
mobileNavbar.initDepartmentBtnRow()