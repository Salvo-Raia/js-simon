
/* Random numbers */
console.log("Genero 5 numeri casuali");
let number1 = getRandom(1, 50);
let number2 = getRandom(1, 50);
let number3 = getRandom(1, 50);
let number4 = getRandom(1, 50);
let number5 = getRandom(1, 50);
console.log("Ho estratto i numeri:", number1, number2, number3, number4, number5);







/* Funzioni */
/**
 * This function allows you yo generate a random number.
 * @param {number} min the minimum random number to generate.
 * @param {number} max the maximum random number to generate.
 * @returns {number} a random generated number between min and max parameteres.
 */
function getRandom (min, max) {
    return Math.floor(Math.random() * (max -min) + min)
}