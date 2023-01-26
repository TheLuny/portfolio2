"use strict";const menu_slider=new Swiper(".adventures__menu",{slidesPerView:2.5,slideToClickedSlide:!0,grabCursor:!0,slidesPerGroup:1,watchOverflow:!0,breakpoints:{400:{slidesPerView:4},600:{slidesPerView:4.4574}}}),trips_slider=new Swiper(".adventures__trips",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},touchRatio:0}),images_slider=new Swiper(".adventures__images",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},nested:!0,navigation:{nextEl:".adventures__image-arrow-right",prevEl:".adventures__image-arrow-left"},on:{realIndexChange:function(){this.activeIndex+1<10?document.querySelector(".adventures__counter").textContent="0"+(this.activeIndex+1)+".":(console.log(this.activeIndex),document.querySelector(".adventures__counter").textContent=this.activeIndex+1+".")}}}),reviews_slider=new Swiper(".reviews__reviews-for-adap",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,slidesPerView:"auto",autoplay:{delay:5e3}}),menu_links=document.querySelectorAll(".header__menu-link[data-goto]"),menu_button=document.querySelector(".header__menu-button");if(menu_links.length>0){function e(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-10;window.scrollTo({top:o,behavior:"smooth"}),menu_body.classList.remove("_active"),menu_button.classList.remove("_active"),document.body.classList.remove("_locked"),e.preventDefault()}}menu_links.forEach((t=>{t.addEventListener("click",e)}))}const menu_list=document.querySelector(".header__menu-list"),menu_body=document.querySelector(".header__menu-body");menu_button&&menu_button.addEventListener("click",(function(e){menu_body.classList.toggle("_active"),menu_button.classList.toggle("_active"),document.body.classList.toggle("_locked"),menu_list.style.marginLeft=`calc(${menu_button.getBoundingClientRect().left}px - 5%)`}));const menu_slides=document.querySelectorAll(".adventures__menu-slide");let k=0;menu_slides.forEach(((e,t)=>{e.onclick=function(){document.querySelector(".adventures__counter").textContent="01.",trips_slider.slideTo(t),images_slider[t].slideTo(0),document.querySelector(".adventures__bottom-decor").style.top="calc("+document.querySelector(".adventures__trips-slide:nth-of-type("+(t+1)+")").offsetHeight+"px-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)",menu_slides.forEach(((e,o)=>{t==o?(e.style.color="#41EAD4",e.style.opacity="1",k=o):(e.style.color="#FFFFFF",e.style.opacity="0.5")})),document.querySelectorAll(".adventures__menu-slide > div").forEach(((e,o)=>{e.style.display=t==o?"block":"none"}))},e.onmouseover=function(){k!=t&&(e.style.opacity="0.7",e.style.color="#41EAD4",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.height="3px",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.display="block",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.top="calc(100% - 3px/6)")},e.onmouseout=function(){k!=t?(e.style.color="#FFFFFF",e.style.opacity="0.5",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.height="4px",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.display="none",document.querySelector(".adventures__menu-slide:nth-of-type("+(t+1)+") > div").style.top="calc(100% - 1px)"):(e.style.color="#41EAD4",e.style.opacity="1")}}));const counter=document.querySelector(".adventures__counter-block");counter.style.top="calc("+.47*document.querySelector(".adventures__image").offsetHeight+"px - "+counter.offsetHeight+"px / 2 )";const trip_decor=document.querySelector(".adventures__bottom-decor");trip_decor.style.top="calc("+document.querySelector(".adventures__image").offsetHeight+"px-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)";let aboutUsAdap=document.querySelector(".about-us__photos-for-adaptive"),aboutUsAdapPhotos=aboutUsAdap.querySelectorAll(".about-us__photo");aboutUsAdapPhotos[0].classList.add("_active"),aboutUsAdapPhotos[4].style.backgroundImage=getComputedStyle(aboutUsAdapPhotos[0]).backgroundImage;let activedAdapPhoto=aboutUsAdap.querySelector("._active"),aboutUsPhotosBlock=document.querySelector(".about-us__photos"),aboutUsPhotos=aboutUsPhotosBlock.querySelectorAll(".about-us__photo"),selectedAboutUsPhoto=aboutUsPhotosBlock.querySelector("._selected");window.innerWidth>600&&aboutUsPhotos.forEach((e=>{e.addEventListener("click",(function(){selectedAboutUsPhoto=aboutUsPhotosBlock.querySelector("._selected"),selectedAboutUsPhoto.classList.remove("_selected"),e.classList.add("_selected")}))})),window.innerWidth<500&&window.innerWidth>400&&(aboutUsAdap.style.gridTemplateRows=`repeat(2, ${aboutUsAdap.offsetWidth/5}px)`),window.innerWidth<=400&&(aboutUsAdap.style.gridTemplateRows=`repeat(6, ${aboutUsAdap.offsetWidth/10}px)`,aboutUsAdapPhotos.forEach(((e,t)=>{4!=t&&e.addEventListener("click",(function(){activedAdapPhoto=aboutUsAdap.querySelector("._active"),activedAdapPhoto.classList.remove("_active"),e.classList.add("_active"),aboutUsAdapPhotos[4].style.backgroundImage=getComputedStyle(e).backgroundImage}))}))),window.onresize=function(){trip_decor.style.top="calc("+document.querySelector(".adventures__image").offsetHeight+"px-(5.9895833333vw + 2.875rem + 69px) / 1.3333333333)",counter.style.top="calc("+.47*document.querySelector(".adventures__image").offsetHeight+"-"+counter.offsetHeight+"px / 2 )",document.querySelector(".header__menu-body._active")?menu_list.style.marginLeft=`calc(${menu_button.getBoundingClientRect().left}px - 5%)`:menu_list.style.marginLeft=0,window.innerWidth>600&&aboutUsPhotos.forEach((e=>{e.addEventListener("click",(function(){selectedAboutUsPhoto=aboutUsPhotosBlock.querySelector("._selected"),selectedAboutUsPhoto.classList.remove("_selected"),e.classList.add("_selected")}))})),window.innerWidth>531&&menu_body.classList.contains("_active")&&(menu_body.classList.remove("_active"),menu_button.classList.remove("_active"),document.body.classList.remove("_locked")),window.innerWidth<=500&&window.innerWidth>400&&(aboutUsAdap.style.gridTemplateRows=`repeat(2, ${aboutUsAdap.offsetWidth/5}px)`),window.innerWidth<=400&&(aboutUsAdap.style.gridTemplateRows=`repeat(6, ${aboutUsAdap.offsetWidth/10}px)`,aboutUsAdapPhotos.forEach(((e,t)=>{4!=t&&e.addEventListener("click",(function(){activedAdapPhoto=aboutUsAdap.querySelector("._active"),activedAdapPhoto.classList.remove("_active"),e.classList.add("_active"),aboutUsAdapPhotos[4].style.backgroundImage=getComputedStyle(e).backgroundImage}))})))};const footer_columns=document.querySelectorAll(".footer__column");function copyOnClick(e){let t=document.querySelectorAll(e),o=document.querySelector(".notif-on-copy");t.forEach(((e,t)=>{e.onclick=function(){navigator.clipboard.writeText(e.innerText),o.style.visibility="visible",o.style.opacity="1",setTimeout((function(){o.style.visibility="hidden",o.style.opacity="0"}),2e3)}}))}footer_columns.forEach(((e,t)=>{if(0==window.matchMedia("(pointer:none), (pointer:coarse)").matches){let e=footer_columns[t].querySelectorAll(".footer__column-option");e.forEach(((o,s)=>{let n=footer_columns[t].querySelector(".footer__column-decor-line");o.onmouseover=function(){n.style.width=`calc(85% * ${s+1} / ${e.length})`},o.onmouseout=function(){n.style.width="50px"}}))}})),copyOnClick("._copyable");