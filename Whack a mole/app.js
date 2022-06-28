const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const play = document.querySelector(".buttons .play");
const stop = document.querySelector(".buttons .stop");
const cursors = document.querySelector(".cursor img");
const msg = document.querySelector(".msg");
//    msg.innerText = "you win!!";

window.addEventListener("mousemove", (e) => {
    cursors.style.top = e.pageY + "px";
    cursors.style.left = e.pageX+"px";
    window.addEventListener("click", () => {
        cursors.style.animation = "hit 0.1s ease";
        setTimeout(() => { 
            cursors.style.removeProperty("animation")
        }, 100);
    })
})
play.addEventListener("click", () => {
    play.style.display = "none";
    stop.style.display = "inline-block"
    let hole;
    let point = 0;
    let count = 0;
    msg.innerText = "";

    const startGame = setInterval(() => {
        let arrayno = Math.floor(Math.random() * 9);
        hole = holes[arrayno];
        let image = document.createElement("img");
        image.setAttribute("src", "./mole.png");
        image.setAttribute("class", "mole");
        hole.appendChild(image);
        setTimeout(() => {
            count = count + 1;
            if (count == 25) {
                msg.innerText="you lose!!"
                clearInterval(startGame)
                stop.style.display = "none";
                play.style.display = "inline-block";
                play.innerText="RE-PLAY"
        score.innerText = 0;
                
                
            } else if (point == 5) {
                   msg.innerText = "you win!!";
                clearInterval(startGame);
                 stop.style.display = "none";
                play.style.display = "inline-block";
                play.innerText="RE-PLAY"
        score.innerText = 0;
             
    }
            console.log(count);
            hole.removeChild(image);
        }, 600);
    }, 700)
    window.addEventListener("click", (e) => {
        if (e.target == hole) score.innerText = ++point;
    })
    stop.addEventListener("click", () => {
        clearInterval(startGame);
        stop.style.display = "none";
        play.style.display = "inline-block";
        play.innerText="RE-PLAY"

        score.innerText = 0;
    });
    
    
});