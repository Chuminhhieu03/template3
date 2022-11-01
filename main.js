var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  setWrapperSize: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next1",
    prevEl: ".button-prev1",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".button-next2",
    prevEl: ".button-prev2",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
  },
});

const btn = document.querySelector("button.btn-mobile");
const menu = document.querySelector(".menu-mobile");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  btn.classList.toggle("hidden");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  btn.classList.toggle("hidden");
});
