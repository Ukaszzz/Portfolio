const spanText = document.querySelector(".head h2");
spanText.textContent = " ";
const txt = "in my world".toUpperCase();

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

const projectH1 = document.querySelectorAll(".projects__one  h1");
console.log(projectH1);
// const projectP
// const projectP2

// const add
