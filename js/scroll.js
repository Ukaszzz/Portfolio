const btnPortfolio = document.querySelector(".menu__portfoli");
const btnAboutMe = document.querySelector(".menu__me");
const btnOffer = document.querySelector(".menu__offer");
const btnContact = document.querySelector(".menu__contact ");
const btnPortfolioHead = document.querySelector(".head__portfolio");
const btnContactHead = document.querySelector(".head__kontakt");
const btnHome = document.querySelector(".menu__home");
// const btnBack = document.querySelector(".backButton");
const loader = document.querySelector(".loader-wrap");

const animation = () => {
  loader.style.display = "block";
  setTimeout(function () {
    loader.style.display = "none";
  }, 500);
};

btnPortfolio.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
    // behavior: "smooth",
  });
  animation();
});

btnAboutMe.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".aboutMe").offsetTop,
    // behavior: "smooth",
  });
  animation();
});
btnPortfolioHead.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
    // behavior: "smooth",
  });
  animation();
});

btnOffer.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".skills").offsetTop,
    // behavior: "smooth",
  });
  animation();
});
btnContact.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
    // behavior: "smooth",
  });
  animation();
});
btnContactHead.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
    // behavior: "smooth",
  });
  animation();
});
btnHome.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth",
  });
  animation();
});
btnBack.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    // behavior: "smooth",
  });
  animation();
});

window.addEventListener("DOMContentLoaded", () => {
  animation();
});
