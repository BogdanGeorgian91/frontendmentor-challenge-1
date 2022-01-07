const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__navlist");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('header__hamburger-active');
  nav.classList.toggle("header__navlist-bm");
});

document.querySelectorAll(".header__link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("header__hamburger-active");
    nav.classList.remove("header__navlist-bm");
}))
