const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");
const decsion = document.querySelector(".decsion");
const terrorist = document.createElement("img");

// const backgroundAudio = new Audio("background.mp3");
const gunShot = new Audio("gun.mp3");
const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "./terrorist.png");
let count = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  // backgroundAudio.play();
        decsion.innerText=""

    container.appendChild(terrorist);
    let stop=setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  terrorist.style.position = "absolute";
  terrorist.style.top = randTop + "px";
    terrorist.style.left = randLeft + "px";
    count++;
    if (count >= 25) {
        clearInterval(stop)
        startBtn.innerText = "START GAME";
        count = 0;
      decsion.innerText = "YOU LOSE!!";
      // backgroundAudio.pause();
        }
    else if(score==5) {
        clearInterval(stop);
        startBtn.innerText = "START GAME";
        count = 0;
      decsion.innerText = "YOU WIN!!"
      // backgroundAudio.pause();
      }
}, 1000);

  startBtn.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";
gunShot.currentTime = 0;
  gunShot.play();
  // gunShot.loop = true;
  if (e.target === terrorist) score++;

  startBtn.innerText = "SCORE: " + score;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});