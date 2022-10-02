let readlineSync = require('readline-sync');

const VUELTAS = 4 //cantidad de vueltas
let total = 0;
let promedio = 0;
for (let i = 0; i < VUELTAS; i++) {
    let vuelta = readlineSync.question("Indique el tiempo de la vuelta: ");
    //el valor vuelta almacena string por lo cual lo convertimos a un numero con parseInt()
    total += parseInt(vuelta);
}

promedio = total / VUELTAS;
console.log("El total de las vueltas es : " + total);
console.log("El promedio de las vueltas es : " + promedio);