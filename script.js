var score = 0;
var timer = 6;
var hit = 0;

function startTimer() {
  var timerVal = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerSet").textContent = timer;
    } else {
        document.querySelector("#pgbtm").textContent = `Game Over: Your score is ${score}`;
        stopInterval(timerVal);
    }
  }, 1000);
}

function Makebubble() {
  let cluster = "";
  for (let i = 1; i <= 102; i++) {
    let rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }
  let a = (document.querySelector("#pgbtm").innerHTML = cluster);
}

function changeHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#setHit").textContent = hit;
}

function increaseScore() {
  score += 10;
  document.querySelector("#setScore").textContent = score;
}

function bubbling() {
  document.querySelector("#pgbtm").addEventListener("click", (dets) => {
    var num = Number(dets.target.textContent);
    if (num == hit) {
      Makebubble();
      changeHit();
      increaseScore();
    }
  });
}

startTimer();
Makebubble();
changeHit();
bubbling();
