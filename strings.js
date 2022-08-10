// Come creare una string
let miaStringa = "ciao sono una stringa";

// Come fare l'escape dei caratteri? Consideriamo che si possono utilizzare gli apici singoli e quelli doppi
let testo = 'Quanto è bella l\'alba';
console.log(testo);

// Altrimenti si potrebbe utilizzare la combinazione "" e '
testo = "Quanto è bella l'alba";
console.log(testo);

// Attenzione sempre alla concatenzazione fatta su stringhe con apici mischiati perchè si potrebbero avere errori/problemi
let nome = "Fede";
let numero = 56;

let concatenzazione = nome + numero;

console.log(concatenzazione);
console.log(typeof (concatenzazione));



// una stringa è e rimane sempre un oggetto. Essendo un oggetto, ogni oggetto ha dei metodi o funzioni che possiamo utilizzare per fare qualcosa, elaborazioni
let stringa = "ciao";
console.log(stringa.length);

// come ottenere un carattere specificco di una stringa? trattandola come un array normale, quindi da 0 a 3
console.log(stringa[0]);
console.log(stringa[stringa.length - 1]); //per andare a prendere l'ultimo carattere di una stringa non conoscendone la lunghezza

// come andare a prendere una parte di una stringa (substring) con SLICE
stringa = "con questa bellissima stringa mi sto divertendo moltissimo";
let indexBellissima = stringa.indexOf("bellissima"); //ci facciamo dare l'indice di quando inizia la parola che gli passiamo
console.log(stringa.slice(indexBellissima)); //con slice prendiamo solo il punto di partenza e quindi dal primo indice e poi ci facciamo dare tutta la string sebza tagliare prima


// stringa in UPPERCASE
console.log(stringa.toUpperCase());

// string in lowecase
console.log(stringa.toLowerCase());

