let clicked = true;
let size = 100;
btn1 = document.querySelector(".smallMenu");
nav = document.querySelector(".menu__navigation");
hh = document.querySelector(".head__line");
const btnBack = document.querySelector(".backButton");

window.addEventListener("scroll", function() {
  console.log("scroll");
  if (window.scrollY <= size) {
    nav.style.backgroundColor = "rgb(0,0,0)";
    btnBack.style.display = "none";
  } else if (window.scrollY >= size) {
    nav.style.backgroundColor = "rgba(0,0,0,0.7)";
    btnBack.style.display = "flex";
  }
});

btn1.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  let men1 = document.querySelector(".smallMenu__first");
  let men2 = document.querySelector(".smallMenu__second");
  if (clicked == true) {
    menu.style.display = "block";
    men1.style.display = "none";
    men2.style.display = "block";
    hh.style.marginTop = "80px";
    nav.style.height = "100%";

    clicked = !clicked;
  } else if (clicked == false) {
    menu.style.display = "none";
    men1.style.display = "block";
    men2.style.display = "none";
    hh.style.marginTop = "130px";

    clicked = !clicked;
  }
});
