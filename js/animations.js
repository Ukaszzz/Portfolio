const spanText = document.querySelector(".head__p");
spanText.textContent = " ";
const txt = "na mojej stronie".toUpperCase();

let indexText = 0;
const time = 120;

setTimeout(() => {
  const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
  };

  const indexTyping = setInterval(addLetter, time);
}, 1200);

const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (
    --index &&
    window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
  ) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
