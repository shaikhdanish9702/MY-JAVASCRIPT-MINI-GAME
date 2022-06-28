const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const idreplay = document.querySelector("#replay");
let match = document.querySelector(".Matches");
let replay = document.querySelector(".REPLAY");
let matches = 0;
let audio=new Audio("8.mp3")
options.forEach((option) => {
  option.addEventListener("click", () => {
          idreplay.classList.add("replay")

    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");
    match.innerText = ""
    audio.current
    audio.currentTime =0;

    audio.play();

    
    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "./" + option.innerText + "Player.png";

      const choice = ["stone", "paper", "scissors"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "./" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "stone") {
        if (computerChoice === "paper") {
          computerPoints.innerHTML = cPoints + 1;

          matches++
        } else if (computerChoice === "scissors") {
          playerPoints.innerHTML = pPoints + 1;
           matches++
        }
      } else if (option.innerHTML === "paper") {
        if (computerChoice === "scissors") {
          computerPoints.innerHTML = cPoints + 1;
           matches++
        } else if (computerChoice === "stone") {
          playerPoints.innerHTML = pPoints + 1;
           matches++
        }
      } else {
        if (computerChoice === "stone") {
          computerPoints.innerHTML = cPoints + 1;
           matches++
        } else if (computerChoice === "paper") {
          playerPoints.innerHTML = pPoints + 1;
          matches++

        }
      }
      if (matches == 3) {
        console.log("hello")
        if (pPoints > cPoints) {
          match.innerText = "YOU WIN!!"
          matches = 0;
          computerPoints.innerText=matches
          playerPoints.innerText = matches;
          idreplay.classList.remove("replay")

        } else {
          match.innerText = "YOU LOSE!!"
          matches = 0;
           computerPoints.innerText=matches
          playerPoints.innerText = matches;
          idreplay.classList.remove("replay")
        }
      }
      audio.pause();

      
    }, 900);
  });
});
