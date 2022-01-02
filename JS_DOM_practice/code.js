const letters = document.querySelectorAll("h1>div.letter");

const timer = setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomRgb();
    letter.classList.toggle("big");
    letter.classList.toggle("small");
  }
}, 500);

for (let i = 0; i < letters.length; i++) {
  letters[i].setAttribute("onclick", `removeBig(${i})`);
}

// for (let letter of letters) {
//   letter.setAttribute("onclick", `removeBig(${letters[letter]})`);
// }

function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

function removeBig(num) {
  letters[num].classList.toggle("big");
}

const input = document.querySelector(".textInput");
input.setAttribute("placeholder", "Search your stuff here");

const h1 = document.querySelector("h1");
const newExclamation = document.createElement("div");
newExclamation.classList.add("big", "letter");
newExclamation.innerText = "!!!";
h1.append(newExclamation);
