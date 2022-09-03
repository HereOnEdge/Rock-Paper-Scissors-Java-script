// rock paper scissors game where you play against computer.
// ask for an input inside window prompt
// computer checks if input is correct
/*if input is not correct raise an error 
in window alert*/ 

/* computer picks one item randomly
set 3 variables for each item and put their
value as their name(rock,paper,...) as s string */
const rock = "Rock";
const paper = "Paper";
const sciss = "Scissors";

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
console.log(getComputerChoice());

// show computer's choice inside window alert
// show the winner. 
