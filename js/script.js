/* Clock control */
let oneSecond = 1000; 
let tenSeconds = oneSecond * 10;
let secondsLeft = 10;
const countdown = document.getElementById("countdown")

/* Array numeri estratti, array giocatore e punti totalizzati */
const extractedNumbers = [];
const playerNumbers = [];
const matchingNumbers = []; 
let points = 0;

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
    console.log("Ready!");
    secondsLeft--; 
    countdown.innerHTML=`${secondsLeft}`
    if (secondsLeft === 0) {
    clearInterval(counter);
    randomGeneratedNumbers.classList.add("d-none")
    playerValidation.classList.remove("d-none");
    countdown.classList.add("d-none")
}
}, oneSecond); 




/* Invio input per Validazione numeri giocatore */
playerValidation.addEventListener("submit", function (event) {
event.preventDefault();
playerNumbers.push(
   parseInt((playerInput1.value)),
   parseInt((playerInput2.value)), 
   parseInt((playerInput3.value)), 
   parseInt((playerInput4.value)), 
   parseInt((playerInput5.value)));
console.table(playerNumbers)
checkingNumbers()
console.log(typeof playerNumbers [0]);

})

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
for (let i = 0; i < playerNumbers.length; i++) {
    currentPlayerNumber = (playerNumbers[i]); 
    if (extractedNumbers.includes(currentPlayerNumber)) {
        // TODO: Magari evito un altro array solo per far vedere quali ha indovinato il giocatore
        matchingNumbers.push(currentPlayerNumber); 
        points++
        console.log(points);
    } 
} 
}