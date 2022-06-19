let words = [
  "everyone",
  "trick",
  "begun",
  "grandmother",
  "rush",
  "minerals",
  "toward",
  "eleven",
  "right",
  "queen",
];

let answer = "";
let maxWrong = 4;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

const letterBtn = document.querySelectorAll("#letter");
letterBtn.forEach((letter) => {
  letter.addEventListener("click", function handleClick(event) {
    if (wordStatus === answer) {
    } else { document.querySelector('.emoji').innerHTML = 😐;
    }
  });
});

const letterInput = document.querySelector("#input-letter");
const changeEmoji = document.querySelector(".emoji");
const newGame = document.querySelector("#new-game");

newGame.addEventListener('click', () => {
  
})