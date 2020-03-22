const btn2 = document.querySelector(".menu__portfoli");
const btn3 = document.querySelector(".menu__me");
const btn4 = document.querySelector(".menu__offer");
const btn5 = document.querySelector(".menu__contact ");
const btn6 = document.querySelector(".head__portfolio");
const btn7 = document.querySelector(".head__kontakt");

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
