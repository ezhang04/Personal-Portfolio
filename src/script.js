const textElement = document.getElementById('word_change');
const texts = ["<strong>Eric Zhang</strong>", "<strong>A Software Engineer</strong>", "<strong>A Computer Scientist</strong>", "<strong >A Rising Junior @ NJIT</strong >"];

let index = 0;

function changeText() {
    textElement.innerHTML = texts[index];
    index = (index + 1) % texts.length;
}
changeText();
setInterval(changeText, 1500);