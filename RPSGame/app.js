let userScore=0;
let compScore=0;
let drawScore=0;
let totalMoves=0;

let userScorePara=document.getElementById("user-score"); 
let compScorePara=document.getElementById("comp-score");
let drawScoreGamePara=document.getElementById("draw-score");
let totalMovesPara=document.getElementById("total-moves");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice=choice.getAttribute("id");
        totalMoves++;
        totalMovesPara.innerText=totalMoves;
        playGame(userChoice); 
    });
}); 
const getCompChoice= () => {
    const options=["rock","paper","scissors"];
    const ranIndex=Math.floor(Math.random()*3) ;
    return options[ranIndex];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const drawGame = () => {
    drawScore++;
    drawScoreGamePara.innerText=drawScore;
    msg.innerText="Game is Draw. Play again";
    msg.style.backgroundColor="#081b31";
    console.log("game was draw");
};

const playGame = (userChoice) => { 
    console.log("user choice = ",userChoice);
    const compChoice=getCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
           userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


