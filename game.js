// rock paper scissors game where you play against computer.

/*set 3 variables for each item and put their
value as their name(rock,paper,...) as s string */
const rock = "Rock";
const paper = "Paper";
const sciss = "Scissors";
let userChoice = '';
const buttonContainer = document.querySelector(".buttons");
const label = document.querySelector('label');
const bestOf = document.querySelector(".best-of");
const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const sciss_btn = document.querySelector('.scissors');
const start_btn = document.querySelector('.start');
const ask = document.createElement('h2');
const winner = document.createElement('p');
const computerChoice = document.createElement("p")



start_btn.addEventListener('click', () => {
    if (bestOf.value == ""){
        bestOf.focus()
    } else {
        const container = document.querySelector(".container")
        const resultDiv = document.createElement('div');
        container.insertBefore(resultDiv, buttonContainer)
        resultDiv.appendChild(winner);
        resultDiv.appendChild(ask);
        resultDiv.appendChild(computerChoice)
        computerChoice.classList.add("computer-choice")
        ask.classList.add("ask");
        resultDiv.classList.add("result");
        ask.textContent = "Choose between one of the buttons below"
        buttonContainer.style = "display: flex";
        start_btn.style.display = "none";
        label.style.display = "none";
    }
    
})
rock_btn.onclick = () => {
    ask.style.display = "none";
    userChoice = rock;
    pickWinner(userChoice, getComputerChoice())
};
paper_btn.onclick = () => {
    ask.style.display = "none";
    userChoice = paper;
    pickWinner(userChoice, getComputerChoice())
};
sciss_btn.onclick = () => {
    ask.style.display = "none";
    userChoice = sciss;
    pickWinner(userChoice, getComputerChoice())
};
/* create a function that ask for a number
between 1 to 3 as an input inside window prompt 
*/
Choose = () => {
    rock_btn.onclick = () => {
        userChoice = rock;
        pickWinner(userChoice, getComputerChoice())
        console.log(userChoice)
    };
    paper_btn.onclick = () => userChoice = paper;
    sciss_btn.onclick= () => userChoice = sciss;
    // let userChoice = Number(window.prompt("chosse. 1 = rock, 2 = paper, 3 = scissors,"))
    
    return userChoice;
}

// computer picks one item randomly

/* create a function called "getComputerChoice" 
pick a random round number from 1 to 3
using floor and random and save it's result 
inside a variable called "picked" 
using a switch statement check the
"picked" value and return "Rock" if
it's 1 , return "Paper" if it's 2 , and return
"Scissors" if it's 3.*/
getComputerChoice = () => { 
    let picked = 0; 
    picked = Math.floor((Math.random() * 3) + 1);
    switch(picked){
        case 1 :
            computerChoice.textContent = `Computer choosed ${rock}`;
            return rock;
            break;
        case 2 :
            computerChoice.textContent = `Computer choosed ${paper}`;
            return paper;
            break;
        case 3 :
            computerChoice.textContent = `Computer choosed ${sciss}`;
            return sciss;        
    }

}
// create three variables for win , loose and tie
const win = "You WON! ";
const loose = "You LOOSE! ";
const tie = "TIE! "

// create another function that has two properties to decide the winner
pickWinner = (playerSelection , computerSelection) => {

    // compare computerSelection and playerSelection
    if (computerSelection == rock && playerSelection == paper){
        winner.classList.add("winner");
        winner.textContent = `${win} Paper beats Rock`;
        winner.style.cssText = "display: block; color: #03ad14";
        return win;
    } else if (computerSelection == rock && playerSelection == sciss){
        winner.classList.add("winner");
        winner.textContent = `${loose} Rock beats Scissors`;
        winner.style.cssText = "display: block; color: #ee2603";
        return loose;
    } else if (computerSelection == rock && playerSelection == rock){
        winner.classList.add("winner");
        winner.textContent = `${tie} Rock and Rock are tie`;
        winner.style.cssText = "display: block; color: #f5f1f0";
        return tie;
    } else if (computerSelection == paper && playerSelection == rock){
        winner.classList.add("winner"); 
        winner.textContent = `${loose} Paper beats Rock`;
        winner.style.cssText = "display: block; color: #ee2603";
        return loose;
    } else if (computerSelection == paper && playerSelection == paper){
        winner.classList.add("winner");
        winner.textContent = `${tie} Paper and Paper are tie`;
        winner.style.cssText = "display: block; color: #f5f1f0";
        return tie;
    } else if ( computerSelection == paper && playerSelection == sciss){
        winner.classList.add("winner");
        winner.textContent = `${win} Scissors beats Paper`;
        winner.style.cssText = "display: block; color: #03ad14";
        return win;
    } else if (computerSelection == sciss && playerSelection == rock){
        winner.classList.add("winner");
        winner.textContent = `${win} Rock beats Scissors`;
        winner.style.cssText = "display: block; color: #03ad14";
        return win;
    } else if (computerSelection == sciss && playerSelection == paper){
        winner.classList.add("winner");
        winner.textContent = `${loose} Scissors beats Paper`;
        winner.style.cssText = "display: block; color: #ee2603";
        return loose;
    } else if (computerSelection == sciss && playerSelection == sciss){
        winner.classList.add("winner");
        winner.textContent = `${tie} Scissors and Scissors are tie`;
        winner.style.cssText = "display: block; color: #f5f1f0";
        return tie;
    }
}
// create another function to play a specific number of rounds.
game = (rounds) => {
    // create two variables to keep track of scores
    let computerScore = 0;
    let playerScore = 0;
    // loop throgh as how much "rounds" property is ,using for loop.
    for (i = 0; i < rounds ; i++){  
        //run "pickWinner()" each time and save it'value inside "winner" variable.
        let winner = pickWinner(Choose(),getComputerChoice());
        // check for the winner and add the score to winner's variable
        if (winner == win){
            playerScore++ ;
            // show the score inside window alert
            window.alert(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
        } else if (winner == loose){
            computerScore++ ;
            // show the score inside window alert
            window.alert(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
        } else if (winner == tie) { 
            // if its a tie "i" won't increase by one
            i--
            continue
        }
    }
    // show the winner. 
    if (playerScore > computerScore){
        window.alert(`You Won The Match ${playerScore}-${computerScore}`)
    } else if(computerScore > playerScore){
        window.alert(`You Lost The Match ${playerScore}-${computerScore}`)
    }
}
// run the game
// game(5)
