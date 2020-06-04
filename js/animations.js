const spanText = document.querySelector(".head h2");
spanText.textContent = " ";
const txt = "on my website".toUpperCase();

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
