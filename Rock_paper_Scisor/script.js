let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const masg = document.querySelectorAll("#msg");
const userpara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

const drawGame = () => {
    msg.innerText = "Game was draw"
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userpara.innerText = userScore;
        msg.innerText = "you win";
        msg.style.backgroundColor = "Green";
    }
    else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("choice was clicked", userChoice);
        playgame(userChoice);
    })
});