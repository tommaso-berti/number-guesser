let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10)
console.log(generateTarget())

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a valid number between 0 and 9');
        return;
    }
    const humanDiff = getAbsoluteDistance(target, humanGuess);
    const computerDiff = getAbsoluteDistance(target, computerGuess);
    return humanDiff <= computerDiff;
}

const updateScore = (winner) => {
    switch(winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            console.error('Invalid winner');
    }
}

const advanceRound = () => currentRoundNumber++;