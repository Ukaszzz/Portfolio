let clicked = true;
let size = 100;
btnSmallMenu = document.querySelector(".smallMenu");
nav = document.querySelector(".menu__navigation");
headLine = document.querySelector(".head__line");
const btnBack = document.querySelector(".backButton");

window.addEventListener("scroll", function () {
  if (window.scrollY <= size) {
    nav.style.backgroundColor = "rgb(0,0,0)";
    btnBack.style.display = "none";
  } else if (window.scrollY >= size) {
    nav.style.backgroundColor = "rgba(0,0,0,0.7)";
    btnBack.style.display = "flex";
  }
});

btnSmallMenu.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  let menuFirst = document.querySelector(".smallMenu__first");
  let menuSecond = document.querySelector(".smallMenu__second");
  if (clicked == true) {
    menu.style.display = "block";
    menuFirst.style.display = "none";
    menuSecond.style.display = "block";
    headLine.style.marginTop = "80px";
    nav.style.height = "100%";

    clicked = !clicked;
  } else if (clicked == false) {
    menu.style.display = "none";
    menuFirst.style.display = "block";
    menuSecond.style.display = "none";
    headLine.style.marginTop = "130px";

    clicked = !clicked;
  }
});
