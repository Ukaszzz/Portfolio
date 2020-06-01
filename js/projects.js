const ProjetsList = [
  {
    img: "img/kamieńPapier.jpg",

    h1: "Papier Kamień Nożyce",
    p:
      "prosta gra, która w zamyśle jest grą dla dwóch osób, tutaj rolę drugiej osoby spełnia komputer. A czy Ty jesteś wstanie wygrać z maszyną ?",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "ukaszzz.github.io/game/",
  },
  {
    img: "img/memory.jpg",

    h1: "Memory Game",
    p:
      "Prosta gra logiczna memory, która rozwija pamięć, spostrzegawczość oraz refleks",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "ukaszzz.github.io/memory/",
  },
  {
    img: "img/list.jpg",

    h1: "To do list",
    p: " Aplikacja do zapisywania rzeczy do zrobienia",
    p2: "HTML5, CSS3 oraz JavaScript",
    a: "ukaszzz.github.io/toDoApp/",
  },
  {
    img: "img/fatBear.jpg",

    h1: "Fat Bear",
    p:
      " Strona wizytówka wykonana dla firmy Fat Bear. firmy oferującej usługi gastronomiczne",
    p2: "HTML5, CSS3(SCSS) oraz JavaScript",
    a: "ukaszzz.github.io/FatBear/",
  },
];
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const section = document.querySelector(".projects");
const img = document.querySelector(".projects__one img");
const h1 = document.querySelector(".projects__one h1");
const p = document.querySelector(".projects__one .description");
const p2 = document.querySelector(".projects__one .used-skills");
const a = document.querySelector(".projects__one a");

console.log(img, h1, p, p2, a);
let active = 0;

const changeSlide = () => {
  if (active === ProjetsList.length) {
  }
  image.src = ProjetsList[active].img;
  h1.textContent = ProjetsList[active].text;
  popup = ProjetsList[active].popup;
  active++;
};

const keyChangeSlide = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    if (active == 0) {
      active = ProjetsList.length - 1;
    } else if (active === ProjetsList.length) {
      active = 0;
    }
    e.keyCode == 37 ? active-- : active++;

    section.innerHTML = ProjetsList[active];
  }
};

const buttonLeft = () => {
  if (active == 0) {
    active = ProjetsList.length;
  }
  active--;
  img.src = ProjetsList[active].img;
  h1.textContent = ProjetsList[active].h1;
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
  //   section.innerHTML = ProjetsList[active];
  img.src = ProjetsList[active].img;
  h1.textContent = ProjetsList[active].h1;
  p.textContent = ProjetsList[active].p;
  p2.textContent = ProjetsList[active].p2;
  a.href = ProjetsList[active].a;
};
btnRight.addEventListener("click", buttonRight);
btnLeft.addEventListener("click", buttonLeft);
