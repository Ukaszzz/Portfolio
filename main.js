let clicked = true;
let size = 100;
btn1 = document.querySelector(".smallMenu");
nav = document.querySelector(".menu__navigation");
hh = document.querySelector(".head__line");
const btn2 = document.querySelector(".menu__portfoli");
const btn3 = document.querySelector(".menu__me");
const btn4 = document.querySelector(".menu__offer");
const btn5 = document.querySelector(".menu__contact ");
const btn6 = document.querySelector(".head__portfolio");
const btn7 = document.querySelector(".head__kontakt");
const btnBack = document.querySelector(".backButton");

btn2.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".projects").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);

btn3.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".aboutMe").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
btn6.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".projects").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);

btn4.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".skills").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
btn5.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".contacts").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
btn7.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".contacts").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
btnBack.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
);

window.addEventListener("scroll", function() {
  console.log("scroll");
  if (window.scrollY <= size) {
    nav.style.backgroundColor = "rgb(0,0,0)";
  } else if (window.scrollY >= size) {
    nav.style.backgroundColor = "rgba(0,0,0,0.7)";
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
