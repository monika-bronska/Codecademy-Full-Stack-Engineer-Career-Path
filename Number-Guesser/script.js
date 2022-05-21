let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    
    if (getAbsoluteDistance(target, humanGuess) === getAbsoluteDistance(target, computerGuess)) return true;
    else if (getAbsoluteDistance(target, humanGuess) < getAbsoluteDistance(target, computerGuess)) return true;
    else return false;
}

const updateScore = winner => {

    if (winner === 'human') humanScore++;
    else if (winner === 'computer') computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

