const btnPortfolio = document.querySelector(".menu__portfoli");
const btnAboutMe = document.querySelector(".menu__me");
const btnSkills = document.querySelector(".menu__skills");
const btnContact = document.querySelector(".menu__contact ");
const btnPortfolioHead = document.querySelector(".head__projects");
const btnContactHead = document.querySelector(".head__kontakt");
const btnHome = document.querySelector(".menu__home");

const loader = document.querySelector(".loader-wrap");

const animation = () => {
  loader.style.display = "block";
  setTimeout(function () {
    loader.style.display = "none";
  }, 300);
};

btnPortfolio.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
  });
  animation();
});

btnAboutMe.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".aboutMe").offsetTop,
  });
  animation();
});
btnPortfolioHead.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".projects").offsetTop,
  });
  animation();
});

btnSkills.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".skills").offsetTop,
  });
  animation();
});
btnContact.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
  });
  animation();
});
btnContactHead.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".contacts").offsetTop,
  });
  animation();
});
btnHome.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
  animation();
});
btnBack.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
  animation();
});

window.addEventListener("DOMContentLoaded", () => {
  loader.style.display = "none";
});
