/* Music */
const audio = document.getElementById("music"); 
audio.autoplay
window.addEventListener("click", () => {
  audio.play();
});

/* Clock control */
let oneSecond = 1000; 
let secondsLeft = 11;
const countdown = document.getElementById("countdown");

/* Array numeri estratti, array giocatore e punti totalizzati */
const extractedNumbers = [];
const playerNumbers = [];
const matchingNumbers = [];
let points = 0;
const results = document.getElementById("results");

/* Inputs */
let playerInputs = document.querySelectorAll(".form-control")
const playerValidation = document.getElementById("answers-form");

/* Random numbers */
for (let i = 0; i < 5; i++) {
    extractedNumbers.push(getRandom(1,50))
}
console.table(extractedNumbers);;

/* DOM Elements */
const instructions = document.getElementById("instructions");
const avatar = document.getElementById("artur-avatar");
const randomGeneratedNumbers = document.getElementById("numbers-list");
for (let i = 0; i < 5; i++) {
    randomGeneratedNumbers.innerHTML += `<li>${extractedNumbers[i]}</li>`
}

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

/* Invio input per validazione numeri giocatore */
playerValidation.addEventListener("submit", function (event) {
event.preventDefault();    
for (let i = 0; i < 5; i++) {
    playerSingleInput = playerInputs[i].valueAsNumber; 
    playerNumbers.push(playerSingleInput);
}
console.table(playerNumbers);
checkingNumbers();
points = 0; 
for (let i = 0; i < 5; i++) {
    playerInputs[i].value = ""; 
}
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
        extractedNumbers.splice(currentExtractedNumber[i],0); 
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