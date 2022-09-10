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
const scoreContain = document.querySelector(".score-contain")
const uShownScore = document.querySelector(".userS")
const cShownScore = document.querySelector(".computerS")
const buttons = document.querySelectorAll(".button")
let userScore = 0 ;
let computerScore = 0 ;




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
        winner.style.display = "none";
        computerChoice.style.display = "none";
        ask.style.display = "block";
        scoreContain.style.display = "none";
        userScore = 0;
        computerScore = 0;
    }
    
})
/* create a function that ask for a number
between 1 to 3 as an input inside window prompt 
*/

// 

// change "scoreContain" display to flex

// set "uShownScore" textContent to "userScore"

// set "cShownScore" textContent to "computerScore"



// check the variable using switch statement

// if its 'win' add one point to 'userScore' and update uShownScore

// if its 'loose' add one point to "computerScore" and update cShownScore

/* */


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ask.style.display = "none";
        computerChoice.style.display = "block";
        winner.style.display = "block";
        scoreContain.style.display = "flex";
        uShownScore.textContent = `${userScore}`;
        cShownScore.textContent = `${computerScore}`;
        if(button == rock_btn){
            userChoice = rock;
        } else if(button == paper_btn){
            userChoice == paper;
        } else if(button == sciss_btn){
            userChoice == sciss;
        } // store the pickWinner() into a variable
        let result = pickWinner(userChoice, getComputerChoice());
        checker:
        switch(result){
            case win:
                userScore++;
                uShownScore.textContent = `${userScore}`;
                uShownScore.style.color = "#03ad14";
                cShownScore.style.color = "#ff9e01"
                break checker;
            case loose:
                computerScore++;
                cShownScore.textContent = `${computerScore}`;
                cShownScore.style.color = "#ee2603";
                uShownScore.style.color = "#ff9e01";
                break checker;
            case tie:
                uShownScore.style.color = "#ff9e01";
                cShownScore.style.color = "#ff9e01";
                break checker;
        }
        if(userScore == Math.floor((bestOf.value / 2) + 1) || computerScore ==
             Math.floor((bestOf.value / 2) + 1)){
                buttonContainer.style.display = "none";
                if(userScore > computerScore){
                    winner.textContent = "Yay You Won The MATCH!";
                    winner.style.color = "#03ad14";
                    start_btn.style.display = "block";
                    label.style.display = "block";
                } else {
                    winner.textContent = "Yup You Lost The MATCH To a Computer!";
                    winner.style.color = "#ee2603";
                    start_btn.style.display = "block";
                    label.style.display = "block";
                }
                
    
        }
    })
})


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
game = (bestOf) => {
    // create two variables to keep track of scores
    let computerScore = 0;
    let playerScore = 0;
    // loop throgh as how much "rounds" property is ,using for loop.
    for (i = 0; i < bestOf ; i++){  
        //run "pickWinner()" each time and save it'value inside "winner" variable.
        if (playerScore == Math.floor((bestOf / 2) + 1) || computerScore ==
         Math.floor((bestOf / 2) + 1)){
            break
         } else {
            let winner = pickWinner(Choose(),getComputerChoice())
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
