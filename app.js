let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScorePara = document.querySelector('#userScore');
const compScorePara = document.querySelector('#compScore');

const generateComputerChoice = ()=>{
    //rock,paper,scissors
    const options = ['rock','paper','scissors'];
    const ranIndex = Math.floor(Math.random()*3);
    return options[ranIndex];
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        // console.log("Choice was Clicked",id)
        playGame(userChoice);
    })
})

const drawGame = ()=>{
    msg.innerText = "Game Draw!!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    // console.log("User Choice ", userChoice)
    //Generate Computer Choice
    const compChoice = generateComputerChoice();
    // console.log("Computer Choice ",compChoice)

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper,scissors
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            //rock,scissors
            userWin = compChoice === 'rock' ? true : false;
        }else{
            //rock,paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
}