var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 2
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 2
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 2
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 2
    }
  }
});