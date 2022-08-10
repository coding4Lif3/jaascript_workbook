let nome;
nome = "pippo";
console.log(nome);


let classe = ['pippo', 'pollo', 'gino'];



console.log(nome + " pollo");

console.log(classe);

console.log(typeof (classe))
console.log(typeof (nome));
console.log(typeof (5));
console.log(typeof (true));
console.log(nome.length);

let variabile; //dischiarazione
variabile = 22; //inizializzazione
let variabile2 = 21; //dichiarazione e inizializzazione


/* Tipi di variabili, stringhe, numeri, float (con virgola), booleani (true, false), array che poi sarebbero object */
//stringa
let stringa = "pollo";
console.log(typeof (stringa));

//numero
let numero = 22;
console.log(typeof (numero))

//float
let virgolaMobile = 22.5;
console.log(typeof (virgolaMobile))

//booleano
let booleano = true;
console.log(typeof (booleano))

let arrayDiProva = [1, 2, 3, 4, 5];
console.log(typeof (arrayDiProva));
console.log(arrayDiProva[0])
console.log(arrayDiProva.length)


// object personas
let personas = {
    name: "Pippo",
    surname: "Pollo",
    fiscalCode: "23423jh4j2kh4232",
    cityOfBirth: "Rome",
    age: 22,
    preferredColors: ["blue", "dark", "green"]
};

console.log(personas.fiscalCode);
console.log(personas.preferredColors[0]);

// costanti
const costante = 2;
//costante = 5; --> se lo si decommenta si avrà un errore riguardo un cambio su costante
console.log(costante);