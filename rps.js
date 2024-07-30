let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = ()=>{
    msg.innerText = "It's a Draw!!";
    msg.style.backgroundColor = "#534d41";
}

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lose :(  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choice -> paper/scissors
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            //computer choice -> rock/scissors
            userWin = compChoice === "scissors"?false:true;
        }else{
            //computer choice -> rock/paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    //monitor choice clicked
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})