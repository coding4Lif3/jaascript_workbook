/** Numbers and operators with their precedennce */

// interi  43 e -43 numeri , float fino a 7 decimali, double fino a 10 decimali, binary, octal, esadecimali
// comunque per javascript è sempre tutto un decimale qualsiasi numero andiamo ad usare

const numero = 3.45666545664
console.log(numero.toFixed(4)); // taglia il numero dopo 4 cifre decimali toFixed()

const numero1 = 43;
console.log(Number(numero1) + 3); // Number converte una stringa in un numero Number()

// Operatori incremento/decremento ++ --
let numberIncrement = 10;
console.log(numberIncrement++); // non si vede subito l' incremento
console.log(numberIncrement--); // non si vede subito il decremento
console.log(numberIncrement);
console.log(--numberIncrement); // in questo modo vediamo subito sia l'incremento che il decremento
console.log(++numberIncrement);

// Operatori di assegnazione = += -= /= *=
let numeroAssegnazione = 10;
numeroAssegnazione += 5;
console.log(numeroAssegnazione);

numeroAssegnazione /= 5;
console.log(numeroAssegnazione);


// Operatori di comparazione === !== (== !=) < > <= >=
// Differenza tra == e ===
// == va a verificare che il valore sia uguale ma non il tipo di oggetto/variabile con contenuto annesso

// verifico il valore tra 2 variabili diverse come string e number
let numeroDaVerificare = 10;
let stringaDaVerificare = "10";

console.log(numeroDaVerificare == stringaDaVerificare);

// prova con === e quindi dovrebbe dare FALSE rispetto a quello precedente
console.log(numeroDaVerificare === stringaDaVerificare);