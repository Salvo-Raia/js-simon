/* Clock control */
let oneSecond = 1000; 
let secondsLeft = 10;
const countdown = document.getElementById("countdown");

/* Array numeri estratti, array giocatore e punti totalizzati */
const extractedNumbers = [];
const playerNumbers = [];
const matchingNumbers = [];
let points = 0;
const results = document.getElementById("results");

/* Player inputs */
let playerInput1 = document.getElementById("player-input1");
let playerInput2 = document.getElementById("player-input2");
let playerInput3 = document.getElementById("player-input3");
let playerInput4 = document.getElementById("player-input4");
let playerInput5 = document.getElementById("player-input5");
const playerValidation = document.getElementById("answers-form");

/* Random numbers */
let number1 = getRandom(1, 50);
let number2 = getRandom(1, 50);
let number3 = getRandom(1, 50);
let number4 = getRandom(1, 50);
let number5 = getRandom(1, 50);
extractedNumbers.push(number1, number2, number3, number4, number5); 
console.table(extractedNumbers);;

/* DOM Elements */
const instructions = document.getElementById("instructions");
const avatar = document.getElementById("artur-avatar");
const randomGeneratedNumbers = document.getElementById("numbers-list");
randomGeneratedNumbers.innerHTML = `
<li>${number1}</li>
<li>${number2}</li>
<li>${number3}</li>
<li>${number4}</li>
<li>${number5}</li>
`
/* Countdown all'inizio del gioco */
let counter = setInterval(function () {
    secondsLeft--; 
    countdown.innerHTML=`⏳ ${secondsLeft}...`
    if (secondsLeft === 0) {
    clearInterval(counter);
    randomGeneratedNumbers.classList.add("d-none")
    playerValidation.classList.remove("d-none");
    countdown.innerText = "Tocca a te"
    instructions.innerText = "Scrivi le tue risposte!"
    avatar.src="./img/Guess.png";}
}, oneSecond); 

/* Invio input per Validazione numeri giocatore */
playerValidation.addEventListener("submit", function (event) {
event.preventDefault();    
playerInput1.classList.remove("bg-danger")
playerNumbers.push(
playerInput1.valueAsNumber,
playerInput2.valueAsNumber, 
playerInput3.valueAsNumber, 
playerInput4.valueAsNumber, 
playerInput5.valueAsNumber);
checkingNumbers();
console.table(playerNumbers);
playerInput1.value = "";
playerInput2.value = "";
playerInput3.value = "";
playerInput4.value = "";
playerInput5.value = "";
points = 0; 
/* Svuoto gli array per non far cumulare punti anche dopo input post-partita */
playerNumbers.splice(0,5);
extractedNumbers.splice(0,5); 
}
)
    
    /* Funzioni */
/**
 * This function allows you yo generate a random number (min and max values included)
 * @param {number} min the minimum random number to generate.
 * @param {number} max the maximum random number to generate.
 * @returns {number} a random generated number between min and max parameteres.
 */
function getRandom (min, max) {
    return Math.floor(Math.random() * (max -min + 1) + min)
}

/**
 * This function allows you to check if the player numbers are included in random generated numbers array
 */
function checkingNumbers () {
for (let i = 0; i < extractedNumbers.length; i++) {
    let currentExtractedNumber = (extractedNumbers[i]); 
    if (playerNumbers.includes(currentExtractedNumber)) {
        matchingNumbers.push(currentExtractedNumber);
        extractedNumbers.pop(currentExtractedNumber[i]); 
        points++
    } 
} 

if (points === 0) {
    avatar.src="./img/Lose.png"; 
    results.innerText = "Che sfortuna, non ne hai beccato uno!"
    instructions.innerText = "Ricarica la pagina con F5 per riprovare!"
    countdown.classList.add("d-none")
} else if (points == 1) {
    avatar.src="./img/NotBad.png"; 
    results.innerHTML = `Hai totalizzato ${points} punto!`
    instructions.innerText = `Numero indovinato: ${matchingNumbers}`
    countdown.classList.add("d-none")
} else if (points == 5) {
    avatar.src="./img/5o5.png"; 
    results.innerHTML = `Che fenomeno! Li hai ricordati tutti!`
    instructions.innerText = `${matchingNumbers.join(", ")}`
    countdown.classList.add("d-none")
} else {
    avatar.src="./img/Ok.png"; 
    results.innerHTML = `Hai totalizzato ${points} punti!`
    instructions.innerText = `Numeri indovinati: ${matchingNumbers.join(", ")}`
    countdown.classList.add("d-none")
}
}