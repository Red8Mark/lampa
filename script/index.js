// header scrolling
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
  scrollAnimation();
});

// burger menu
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("active");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("active");
  navlist.classList.remove("open");
};

//slider
const items = document.querySelectorAll(".b-item");
const barbers = document.querySelector(".barbers");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
let count = 0;
let width;

window.addEventListener("resize", init);
init();

function init() {
  width = document.querySelector(".slider").offsetWidth; //вычисляем ширину слайдера
  width = width / 3; //делим ширину на 3 чтобы выводить 3 елемента на экран

  if (window.innerWidth >= 840) {
    // width = width; //если шинина меньше заданного значения, то меняем количество выводимых елементов
    nextBtn.addEventListener("click", () => {
      count++;
      if (count >= items.length - 2) {
        count = 0;
      }
      rollSlider();
    });

    prevBtn.addEventListener("click", () => {
      count--;
      if (count < 0) {
        count = items.length - 3;
      }
      rollSlider();
    });
  }
  if (window.innerWidth < 840 && window.innerWidth >= 540) {
    width = (width * 3) / 2; //если шинина меньше заданного значения, то меняем количество выводимых елементов
    nextBtn.addEventListener("click", () => {
      count++;
      if (count >= items.length - 1) {
        count = 0;
      }
      rollSlider();
    });

    prevBtn.addEventListener("click", () => {
      count--;
      if (count < 0) {
        count = items.length - 2;
      }
      rollSlider();
    });
  }
  if (window.innerWidth < 540) {
    width = width * 3; // в мобильной версии выводим один элемент на экран
    nextBtn.addEventListener("click", () => {
      count++;
      if (count >= items.length) {
        count = 0;
      }
      rollSlider();
    });

    prevBtn.addEventListener("click", () => {
      count--;
      if (count < 0) {
        count = items.length - 1;
      }
      rollSlider();
    });
  }

  barbers.style.width = width * items.length + "px";
  items.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

function rollSlider() {
  barbers.style.transform = "translate(-" + count * width + "px)";
}



//scroll-items-animation
const scrollItems = document.querySelectorAll(".s-item");

const scrollAnimation = () => {
  let startAnimation = window.innerHeight + window.scrollY;
  scrollItems.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetWidth / 5;
    if (startAnimation >= scrollOffset) {
      el.classList.add("animation-class");
    } else {
      el.classList.remove("animation-class");
    }
  });
};
