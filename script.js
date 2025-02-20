const result = document.querySelector(".result")
const yourScore = document.querySelector("#your-score")
const machineScore = document.querySelector("#machine-score")
let humanScoreNumber = 0
let machineScoreNumber = 0

const GAMER_OPTION = {

    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',

}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAMER_OPTION.ROCK, GAMER_OPTION.PAPER, GAMER_OPTION.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber);

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + " Máquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Deu empate!!!"
    } else if (
        (human === GAMER_OPTION.PAPER && machine === GAMER_OPTION.ROCK) ||
        (human === GAMER_OPTION.ROCK && machine === GAMER_OPTION.SCISSORS) ||
        (human === GAMER_OPTION.SCISSORS && machine === GAMER_OPTION.PAPER)
    ) {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "A máquina Ganhou!"
    }
}
