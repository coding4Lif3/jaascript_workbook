// Condizionali sono molto utili per valutare lo stato attuale di alcune situazioni/condizioni
// if, else, else if statements
// operatori comparativi === !== == != < > <= >=
// operatori logici come AND OR & NOT
// switch statement
// Ternary operator

// if and else statement 
let nome = "Marco";

if (nome == "Marco") {
    console.log("Ciao Marco");
} else if (nome == "Luca") {
    console.log("Ciao Luca");
} else {
    console.log("Ciao persona anonima");
}

// operatori comparativi dove == fa la comparazione sul contenuto mentre === fa la comparazione anche sul tipo di offetto
let numero = 15;
let numero2 = "15";

if (numero > 20) {
    console.log("ok");
} else {
    console.log("non va bene");
}

// confronto tra contenuto con ==
if (numero == numero2) {
    console.log("hanno lo stesso valore");
} else {
    console.log("non hanno lo stesso valore");
}

// confronto tra contenuto e tipo con ===

if (numero === numero2) {
    console.log("hanno lo stesso valore e lo stesso tipo");
} else {
    console.log("non hanno lo stesso valore, ne tipo");
}

let numero3 = 15;
console.log(numero + " e " + numero3);
if (numero === numero3) {
    console.log("hanno lo stesso valore e lo stesso tipo");
} else {
    console.log("non hanno lo stesso valore, ne tipo");
}



if (numero < 20) {
    if (numero % 2 == 0) {
        console.log("Il numero è pari");
    } else {
        console.log("Il numero è dispari");
        console.log("Il valore del numero analizzato è: " + numero);
    }
} else {
    console.log("Il numero è più grande di 20");
}


if (numero < 20 || (numero % 2 == 0)) {  // OPERATORE OR - se il numero è minore di 20 oppure è pari
    console.log("Il numero è minore di 20 oppure è un numero pari");
} else {
    console.log("Il numero non è minore di 20 e non è neanche pari");
}

if (numero < 20 && (numero % 2 == 0)) {  // OPERATORE AND - se il numero è minore 
    console.log("Il numero è minore di 20 e allo stesso tempo è un numero pari");
} else {
    console.log("Il numero non è minore di 20 oppure non è un numero pari");
}


// SWITCH statement quando dobbiamo esaminare varie casistiche
nome = "Luca";

switch (nome) {
    case "Luca":
        console.log("Ciao Luca");
        break;
    case "Marco":
        console.log("Ciao Marco");
        break;
    case "Gino":
        console.log("Ciao Gino");
        break;
    default:
        console.log("Ciao, purtroppo non so il tuo nome");
        break;
}

// OPERATORE TERNARIO - dove se il numero è minore di 20 allora a nome assegnamo Luca, altrimenti assegnamo Leonardo
nome = (numero < 20) ? "Luca" : "leonardo";
console.log(nome);




