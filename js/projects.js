const ProjetsList = [
  {
    img: "img/kamieńPapier.jpg",

    h2: "Papier Kamień Nożyce",
    p:
      "prosta gra, która w zamyśle jest grą dla dwóch osób, tutaj rolę drugiej osoby spełnia komputer. A czy Ty jesteś wstanie wygrać z maszyną ?",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "ukaszzz.github.io/game/",
  },
  {
    img: "img/memory.png",

    h2: "Memory Game",
    p:
      "Prosta gra logiczna memory, która rozwija pamięć, spostrzegawczość oraz refleks",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "https://ukaszzz.github.io/memory/",
  },

  {
    img: "img/pz.png",
    h2: "metodyka p/z",
    p:
      " Aplikacja do wyznaczenia zasobów początkowych gazu ziemnego w złożu metodą p/z",
    p2: "HTML5, CSS3(SCSS) oraz JavaScript",
    a: "https://ukaszzz.github.io/application-for-the-petroleum-industry/",
  },
  {
    img: "img/AOF.png",
    h2: "AOF",
    p: " Aplikacjado wyznaczania wydatku potencjalnego odwiertu (ang. AOF)",
    p2: "HTML5, CSS3(SCSS) oraz JavaScript",
    a: "https://ukaszzz.github.io/app-for-calculating-AOF/",
  },
  {
    img: "img/toDo.png",

    h2: "To do list",
    p: " Aplikacja do zapisywania rzeczy do zrobienia",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "https://ukaszzz.github.io/toDoApp/",
  },
  // {
  //   img: "img/fatBear.jpg",
  //   h1: "Fat Bear",
  //   p:
  //     " Strona wizytówka wykonana dla firmy Fat Bear. firmy oferującej usługi gastronomiczne",
  //   p2: "HTML5, CSS3(SCSS) oraz JavaScript",
  //   a: "ukaszzz.github.io/FatBear/",
  // },
];
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const section = document.querySelector(".projects");
const img = document.querySelector(".projects__one img");
const h2 = document.querySelector(".projects__one h2");
const p = document.querySelector(".projects__one .description");
const p2 = document.querySelector(".projects__one .used-skills");
const a = document.querySelector(".projects__one a");

let active = 0;

const changeSlide = () => {
  if (active === ProjetsList.length) {
  }
  image.src = ProjetsList[active].img;
  h2.textContent = ProjetsList[active].text;
  popup = ProjetsList[active].popup;
  active++;
};

const buttonLeft = () => {
  if (active == 0) {
    active = ProjetsList.length;
  }
  active--;
  img.src = ProjetsList[active].img;
  h2.textContent = ProjetsList[active].h2;
  p.textContent = ProjetsList[active].p;
  p2.textContent = ProjetsList[active].p2;
  a.href = ProjetsList[active].a;
};

const buttonRight = () => {
  if (active === ProjetsList.length - 1) {
    active = 0;
  } else {
    active++;
  }
  img.src = ProjetsList[active].img;
  h2.textContent = ProjetsList[active].h2;
  p.textContent = ProjetsList[active].p;
  p2.textContent = ProjetsList[active].p2;
  a.href = ProjetsList[active].a;
};
btnRight.addEventListener("click", buttonRight);
btnLeft.addEventListener("click", buttonLeft);
