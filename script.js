const loadingScreen = document.querySelector('.img-loading')
const containerGame = document.querySelector('.container')
const resetButton = document.querySelector('.reset')

const scorePlayer = document.querySelector('#score-player')
const imagePlayer = document.querySelector('#image-player')
const showResult = document.querySelector('#match-result')
const scoreMachine = document.querySelector('#score-machine')
const imageMachine = document.querySelector('#image-machine')

setTimeout(() => {
    loadingScreen.classList.add('hidden')
    containerGame.classList.remove('hidden')
}, 7000);

const choosePlayer = document.querySelectorAll('.choose')

choosePlayer.forEach(item => {
    item.addEventListener('click', () => {
        if (choosePlayer[0] === item) {
            startMachine('rock')
        }
        else if (choosePlayer[1] === item) {
            startMachine('paper')
        }
        else {
            startMachine('scissors')
        }
    })
})

let playerPoint = 1
let machinePoint = 1

function startMachine(player) {
    const options = ['rock', 'paper', 'scissors']
    const images = [{
        rock: 'assets/img/pedra.png',
        paper: 'assets/img/papel.png',
        scissors: 'assets/img/tesoura.png'
    }]

    const randomChoice = Math.floor(Math.random() * 3)
    const chooseMachine = options[randomChoice]

    if (player === 'rock' && chooseMachine === 'rock' ||
        player === 'paper' && chooseMachine === 'paper' ||
        player === 'scissors' && chooseMachine === 'scissors'
    ) {
        imagePlayer.src = images[0][player]
        imageMachine.src = images[0][chooseMachine]
        showResult.innerHTML = 'EMPATE'
    }
    else if (
        player === 'rock' && chooseMachine === 'scissors' ||
        player === 'paper' && chooseMachine === 'rock' ||
        player === 'scissors' && chooseMachine === 'paper'
    ) {
        scorePlayer.value = playerPoint++
        imagePlayer.src = images[0][player]
        imageMachine.src = images[0][chooseMachine]
        showResult.innerHTML = 'VOCÊ GANHOU'
    } else {
        scoreMachine.value = machinePoint++
        imagePlayer.src = images[0][player]
        imageMachine.src = images[0][chooseMachine]
        showResult.innerHTML = 'VOCÊ PERDEU'
    }
}

function resetGame() {
    imagePlayer.src = 'assets/img/pedra.png'
    imageMachine.src = 'assets/img/pedra.png'
    scorePlayer.value = 0
    scoreMachine.value = 0
    showResult.innerHTML = ''
}

resetButton.addEventListener('click', resetGame)