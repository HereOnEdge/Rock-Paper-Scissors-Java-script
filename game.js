// rock paper scissors game where you play against computer.

/*set 3 variables for each item and put their
value as their name(rock,paper,...) as s string */
const rock = "Rock";
const paper = "Paper";
const sciss = "Scissors";

/* create a function that ask for a number
between 1 to 3 as an input inside window prompt 
*/
Choose = () => {
    let userChoice = Number(window.prompt("chosse. 1 = rock, 2 = paper, 3 = scissors,"))
    /*if input is not correct raise an error 
    in window alert*/ 
    if (userChoice > 3 || userChoice < 1){
        return window.alert('choose between 1,2,3')
    }
    //  if input is correct use switch to convert it into text
    else {switch(userChoice){
        case 1 :
            return rock;
            break;
        case 2 :
            return paper;
            break;
        case 3 :
            return sciss;        
    }}
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
            return rock;
            break;
        case 2 :
            return paper;
            break;
        case 3 :
            return sciss;        
    }

}
// create three variables for win , loose and tie
const win = "You Won";
const loose = "You Loose";
const tie = "Tie"

// create another function that has two properties to decide the winner
pickWinner = (playerSelection , computerSelection) =>{

    // compare computerSelection and playerSelection
    if (computerSelection == rock && playerSelection == paper){
        return window.alert(`${win} Paper beats Rock`);
    } else if (computerSelection == rock && playerSelection == sciss){
        return window.alert(`${loose} Rock beats Scissors`);
    } else if (computerSelection == rock && playerSelection == rock){
        return window.alert(`${tie} Rock and Rock are tie`);
    } else if (computerSelection == paper && playerSelection == rock){
        return window.alert(`${loose} Paper beats Rock`);
    } else if (computerSelection == paper && playerSelection == paper){
        return window.alert(`${tie} Paper and Paper are tie`);
    } else if ( computerSelection == paper && playerSelection == sciss){
        return window.alert(`${win} Scissors beats Paper`);
    } else if (computerSelection == sciss && playerSelection == rock){
        return window.alert(`${win} Rock beats Scissors`);
    } else if (computerSelection == sciss && playerSelection == paper){
        return window.alert(`${loose} Scissors beats Paper`);
    } else if (computerSelection == sciss && playerSelection == sciss){
        return window.alert(`${tie} Scissors and Scissors are tie`)
    }
}
pickWinner(Choose(),getComputerChoice());
// show the winner. 
