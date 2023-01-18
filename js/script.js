"use strict"

const menu_slider = new Swiper(".adventures__menu", {
  slidesPerView: 4.2,
  slideToClickedSlide: true,
  grabCursor: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  breakpoints: {
    400:{
      slidesPerView: 4.4574,
    }
  }
})

const trips_slider = new Swiper(".adventures__trips", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect:{
    crossFade: true,
  },
  touchRatio: 0,
})

const images_slider = new Swiper(".adventures__images", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect:{
    crossFade: true,
  },
  nested: true,
  navigation:{
    nextEl: ".adventures__image-arrow-right",
    prevEl: ".adventures__image-arrow-left",
  },
  on: {
    realIndexChange: function () {
      if (this.activeIndex + 1 < 10) {
        document.querySelector(".adventures__counter").textContent = "0" + (this.activeIndex + 1) + ".";
      } else {
        console.log(this.activeIndex);
        document.querySelector(".adventures__counter").textContent = (this.activeIndex + 1) + ".";
      }
    },
  },
})

const reviews_slider = new Swiper(".reviews__reviews-for-adap", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
  },
})

const menu_links = document.querySelectorAll(".header__menu-link[data-goto]")
if (menu_links.length > 0) {
  menu_links.forEach(menu_link => {
    menu_link.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menu_link = e.target;
    if (menu_link.dataset.goto && document.querySelector(menu_link.dataset.goto)) {
      const gotoObj = document.querySelector(menu_link.dataset.goto);
      const gotoObjCoord = gotoObj.getBoundingClientRect().top + pageYOffset - 10;

      window.scrollTo({
        top: gotoObjCoord,
        behavior: "smooth"
      })

      menu_body.classList.remove("_active");
      document.body.classList.remove("_locked");

      e.preventDefault();
    }
  }
}

const menu_list = document.querySelector(".header__menu-list")
const menu_button = document.querySelector(".header__menu-button")
const menu_body = document.querySelector(".header__menu-body")
if (menu_button) {
  menu_button.addEventListener("click", function(e){
    menu_body.classList.toggle("_active");
    menu_button.classList.toggle("_active");
    document.body.classList.toggle("_locked");
    menu_list.style.marginLeft = `calc(${menu_button.getBoundingClientRect().left}px - 5%)`;
  })
}

const menu_slides = document.querySelectorAll(".adventures__menu-slide")
let k = 0
menu_slides.forEach((item, i) => {
  item.onclick = function() {
    document.querySelector(".adventures__counter").textContent = "01.";
    trips_slider.slideTo(i);
    images_slider[i].slideTo(0);
    document.querySelector(".adventures__bottom-decor").style.top = "calc(" + (document.querySelector(".adventures__trips-slide:nth-of-type(" + (i + 1) + ")")).offsetHeight + "px" + "-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)";
    menu_slides.forEach((item, j) => {
      if (i == j) {
        item.style.color = "#41EAD4"
        item.style.opacity = "1"
        k = j
      }else {
        item.style.color = "#FFFFFF"
        item.style.opacity = "0.5"
      }
    });
    document.querySelectorAll(".adventures__menu-slide > div").forEach((item, j) => {
      if (i == j) {
        item.style.display = "block";
      }else {
        item.style.display = "none";
      }
    });
  }
  item.onmouseover = function() {
    if (k != i) {
      item.style.opacity = "0.7";
      item.style.color = "#41EAD4";
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.height = "3px";
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.display = "block";
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.top = "calc(100% - 3px/6)"
    }
  }
  item.onmouseout = function() {
    if (k != i) {
      item.style.color = "#FFFFFF"
      item.style.opacity = "0.5"
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.height = "4px";
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.display = "none";
      document.querySelector(".adventures__menu-slide:nth-of-type(" + (i + 1) + ") > div").style.top = "calc(100% - 1px)"
    } else {
      item.style.color = "#41EAD4"
      item.style.opacity = "1"
    }
  }
});

const counter = document.querySelector(".adventures__counter-block");
counter.style.top = "calc(" + 0.47 * document.querySelector(".adventures__image").offsetHeight + "px - " + counter.offsetHeight + "px / 2 )"
const trip_decor = document.querySelector(".adventures__bottom-decor")
trip_decor.style.top = "calc(" + document.querySelector(".adventures__image").offsetHeight + "px" + "-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)";

window.onresize = function() {
  trip_decor.style.top = "calc(" + document.querySelector(".adventures__image").offsetHeight + "px" + "-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)";
  counter.style.top = "calc(" + 0.47 * document.querySelector(".adventures__image").offsetHeight + "-" + counter.offsetHeight + "px / 2 )"
  if (document.querySelector(".header__menu-body._active")) {
    menu_list.style.marginLeft = `calc(${menu_button.getBoundingClientRect().left}px - 5%)`;
  } else{
    menu_list.style.marginLeft = 0;
  }
}

const footer_columns = document.querySelectorAll(".footer__column")
footer_columns.forEach((item, i) => {
  let footer_options = footer_columns[i].querySelectorAll('.footer__column-option')
  footer_options.forEach((option, j) => {
    let decor_line = footer_columns[i].querySelector(`.footer__column-decor-line`)
    option.onmouseover = function() {
      decor_line.style.width = `calc(85% * ${j + 1} / ${footer_options.length})`;
    }
    option.onmouseout = function() {
      decor_line.style.width = `50px`;
    }
  });
});
