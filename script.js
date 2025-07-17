let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#you");
const compScorepara = document.querySelector("#comp");

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};
const drawGame = () => {
  msg.innerText = "game was a draw";
  msg.style.backgroundColor = " blue";
};

const  showWinner = (userWin,userChoice,compChoice)=> {
  if (userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `you lost!${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
    //genrate user choice 
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
   drawGame();
    }else{
        let userWin = true ;
        if( userChoice === "rock"){
            userWin  = compChoice === " paper" ? false :true;
        } else if( userChoice === "paper") { 
          userWin =  compChoice === "scissors"? false : true;
        } else{
         userWin =    compChoice === "rock " ? false:true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
 };
choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});
