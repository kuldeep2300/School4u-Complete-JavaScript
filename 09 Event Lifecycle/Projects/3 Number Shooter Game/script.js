const timerValue = document.querySelector(".timerValue");
const numberContainer = document.querySelector(".numberContainer");
const targetValue = document.querySelector(".targetValue");
const scoreValue = document.querySelector(".scoreValue");
let numberOfCircles = 100;
let timer = 30;
let target;

startTimer();
restartGame();

// Start Timer
function startTimer() {
  timerValue.innerText = timer;
  setInterval(() => {
    if (timer <= 0) {
      targetValue.innerText = "";
      numberContainer.innerHTML = `
        <div style="font-size: 18px;">Game Over</div>
        <button style="padding: 10px 20px;" onclick=restartGame()>Reset</button>
        `;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);
}

// Reset Timer
function resetTimer() {
  timer = 30;
  timerValue.innerText = timer;
}

// Reset Game
function restartGame() {
  numberContainer.innerHTML = "";
  generateNumbers();
  resetTimer();
  generateTarget();
  resetScore();
}

// Generate Target
function generateTarget() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target;
}

// Reset Score
function resetScore() {
    scoreValue.innerText = 0;
}

// Generate Numbers
function generateNumbers() {
  for (let i = 1; i <= 100; i++) {
    let divElem = document.createElement("div");
    divElem.className = "circle";
    let randomNum = Math.ceil(Math.random() * 10);
    divElem.innerText = randomNum;

    numberContainer.append(divElem);
  }
}

numberContainer.addEventListener("click", (event) => {
  let targetElem = event.target;
  if (targetElem.className === "circle") {
    let number = Number(targetElem.innerText);
    if (target === number) {
      let sv = Number(scoreValue.innerText);
      sv = sv + 10;
      scoreValue.innerText = sv;
      console.log(sv);
    }
    
    generateTarget();
  }
});
