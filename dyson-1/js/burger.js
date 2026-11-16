"use strict";
const burgerButton = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerBurger = document.querySelector(".header__burger");
burgerButton.addEventListener("click", function () {
	headerMenu.classList.toggle("header__menu--open");
	headerBurger.classList.toggle("burger--open");
});
