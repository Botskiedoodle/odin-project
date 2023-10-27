const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3) + 1
  return computerChoice;
}
// getComputerChoice()
const selectionMap = (selection) => {
  return {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
  }[selection]
}

let userScore = 0
let opponentScore = 0
let round = 1
const initializeGame = () => {
  userScore = 0
  userScoreElement.textContent = userScore
  opponentScore = 0
  opponentScoreElement.textContent = opponentScore
  round = 1
  roundElement.textContent = round
}

const roundElement = document.querySelector('#round')
roundElement.textContent = round
const progressRound = () => {
  // game is best of 5
  if (round >= 5) { // Changed from `===` to `>=`
    setTimeout(() => {
      let gameResult;
      if (userScore < opponentScore) {
        gameResult = 'You Lost!';
      } else {
        gameResult = 'You Won!';
      }
      alert(gameResult);
      initializeGame();
      gameHistoryNode.innerHTML = '';
    }, 50); // Delay the alert for 1 second (adjust the time as needed)
    return;
  }
  round++
  roundElement.textContent = round

}

const userScoreElement = document.querySelector('#player-score')
userScoreElement.textContent = userScore

const opponentScoreElement = document.querySelector('#opponent-score')
opponentScoreElement.textContent = opponentScore

const gameHistoryNode = document.querySelector('#game-history')

const resultMapper = (result) => {
  return {
    'win': 'green',
    'lost': 'red',
  }[result]
}

const recordRound = (result, playerSelection, opponentSelection) => {
  const record = document.createElement('li')
  record.textContent = `Round ${result}! You chose ${playerSelection} your opponent chose ${opponentSelection}`
  record.style.color = resultMapper(result)
  gameHistoryNode.appendChild(record)

}


const playRound = () => {
  const roundOutcome = getComputerChoice() - playerSelection
  // predetermined outcomes
  // 2, -1 means the user wis
  // 1, -2 means the computer wins
  // 0 meants tie
  if ([2, -1].includes(roundOutcome)) {
    recordRound('win', selectionMap(playerSelection), selectionMap(getComputerChoice()))
    userScore++
    userScoreElement.textContent = userScore
  }

  if ([1, -2].includes(roundOutcome)) {
    recordRound('lost', selectionMap(playerSelection), selectionMap(getComputerChoice()))
    opponentScore++
    opponentScoreElement.textContent = opponentScore
  }

  if (roundOutcome === 0) {
    recordRound('tie', selectionMap(playerSelection), selectionMap(getComputerChoice()))
  }
  progressRound()

}

const rock = document.querySelector('#rock')
rock.addEventListener('click', (e) => {
  playerSelection = 1
  playRound(playerSelection, getComputerChoice())
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', (e) => {
  playerSelection = 2
  playRound(playerSelection, getComputerChoice())
})

const scissor = document.querySelector('#scissor')
scissor.addEventListener('click', (e) => {
  playerSelection = 3
  playRound(playerSelection, getComputerChoice())
})


