const squares = document.querySelectorAll(".sqr");
const mole = document.querySelector(".mole");
const timeleft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const btn = document.querySelector(".btn");
const btnReset = document.querySelector(".btn-reset");
//
let result = 0;
let hitPosition;
let curretTime = 30;
let timerId = null;
let countDownTimerId;

// Reset function
const reset = () => {
  clearInterval(timerId);
  clearInterval(countDownTimerId);
  squares.forEach((square) => {
    square.innerHTML = "";
  });
  curretTime = 30;
  timerId = null;
  result = 0;
  timeleft.textContent = 0;
  score.textContent = 0;
  hitPosition = null;
};

//
function randomSquare() {
  squares.forEach((square) => {
    square.innerHTML = "";
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.innerHTML +=
    '<img  height="200px" width="200px" src="/443de4c4210c32bcd8e9cbb72579c6d0.jpg" alt="">';
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

btn.addEventListener("click", () => {
  timerId = setInterval(randomSquare, 500);
  countDownTimerId = setInterval(countDown, 1000);
});

function countDown() {
  curretTime--;
  timeleft.textContent = curretTime;

  if (curretTime === 0) {
    clearInterval(countDownTimerId);
    alert("GAME OVER, Your final score is " + result);
    reset();
    clearInterval(timerId);
  }
}

btnReset.addEventListener("click", () => {
  reset();
});
