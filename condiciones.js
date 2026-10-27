// datos de la condición
const cupoCata = 8; 
const inscritos = 8;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el número de inscritos devuelve "Hay cupos, abrir reserva",
// si no devuelve "Cata llena,ofrecer lista de espera"

if (cupoCata > inscritos) {
console.log("Hay cupos, abrir reserva");
} else {
    console.log("Cata llena, ofrecer lista de espera");
}

// operadores de comparación
8 > 5 // true
3 < 10 // true
8 >= 8 // true
4 <= 9 // true
5 === 5 // true
5 !== 3 // true


const reservaMaxima = 2 ;
const reservaPersona = 1 ;
if (reservaPersona >= reservaMaxima) {
console.log("Cupos llenos, ofrecer lista de espera");
} else {
    console.log("Hay cupos, abrir reserva");
}


