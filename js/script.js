/* Random numbers */
const extractedNumbers = [];
const playerNumbers = [];
let points = 0;
console.log("Genero 5 numeri casuali");
let number1 = 42;
let number2 = getRandom(1, 50);
let number3 = getRandom(1, 50);
let number4 = getRandom(1, 50);
let number5 = getRandom(1, 50);
extractedNumbers.push(number1, number2, number3, number4, number5); 
console.table(extractedNumbers);

/* INPUT GIOCATORE */
//TODO: DA SOSTITUIRE CON INPUT REALI
let playerInput1 = 42; 
let playerInput2 = 11; 
let playerInput3 = 16; 
let playerInput4 = 28; 
let playerInput5 = 50; 
playerNumbers.push(playerInput1, playerInput2, playerInput3, playerInput4, playerInput5);

/* Validazione numeri giocatore e numeri estratti */
for (let i = 0; i < playerNumbers.length; i++) {
    currentPlayerNumber = playerNumbers[i]; 
    if (extractedNumbers.includes(currentPlayerNumber)) {
        console.log("lo vedo!");
        points++
    }
}

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