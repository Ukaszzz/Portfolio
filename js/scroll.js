const btnPortfolio = document.querySelector(".menu__portfoli");
const btnAboutMe = document.querySelector(".menu__me");
const btnOffer = document.querySelector(".menu__offer");
const btnContact = document.querySelector(".menu__contact ");
const btnPortfolioHead = document.querySelector(".head__portfolio");
const btnContactHead = document.querySelector(".head__kontakt");
const btnHome = document.querySelector(".menu__home");
// const btnBack = document.querySelector(".backButton");

btnPortfolio.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
    behavior: "smooth",
  })
);

btnAboutMe.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".aboutMe").offsetTop,
    behavior: "smooth",
  })
);
btnPortfolioHead.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
    behavior: "smooth",
  })
);

btnOffer.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".skills").offsetTop,
    behavior: "smooth",
  })
);
btnContact.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
    behavior: "smooth",
  })
);
btnContactHead.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
    behavior: "smooth",
  })
);
btnHome.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);
btnBack.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);
