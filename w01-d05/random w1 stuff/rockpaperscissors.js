////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   
    return ((move == ('') || move == null)? getInput() : move);
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    return ((move == ('') || move == null)? randomPlay() : move);
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if(playerMove == "rock"){
        if(computerMove == "paper"){
            console.log(computerMove + " beats " + playerMove + ". Computer Wins!");
            winner = "computer";
        } else if(computerMove == "scissors"){
            console.log(playerMove + " beats " + computerMove + ". Player Wins!");
            winner = "player"; 
        } else if(computerMove == "rock") {
            console.log("It's a Tie!")
            winner = "tie";
        }
    }

    if(playerMove == "paper"){
        if(computerMove == "scissors"){
            console.log(computerMove + " beats " + playerMove + ". Computer Wins!");
            winner = "computer";
        } else if(computerMove == "rock"){
            console.log(playerMove + " beats " + computerMove + ". Player Wins!");
            winner = "player"; 
        } else if(computerMove == "paper") {
            console.log("It's a Tie!")
            winner = "tie";
        }
    }

    if(playerMove == "scissors"){
        if(computerMove == "rock"){
            console.log(computerMove + " beats " + playerMove + ". Computer Wins!");
            winner = "computer";
        } else if(computerMove == "paper"){
            console.log(playerMove + " beats " + computerMove + ". Player Wins!");
            winner = "player"; 
        } else if(computerMove == "scissors") {
            console.log("It's a Tie!")
            winner = "tie";
        }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins < 5 && computerWins < 5)
    {
        console.log("Current Score, " + playerWins + ":" + computerWins);
        var winner = getWinner(getPlayerMove(), getComputerMove());

        if(winner === "computer"){
            computerWins++;
        } else if(winner === "player"){
            playerWins++;
        }
    }


    return [playerWins, computerWins];
}
