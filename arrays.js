// un array è un oggetto simile alle strighe tanto che è possibile convertire un array in una stringa  e così via.
// anche un array è un oggetto e quindi ha a disposizione farie funzioni/metodi

let cittaString = "Milano, Torino, Roma, Venezia, Napoli";
let dataArray = ["Milano", "Torino", "Roma", "Venezia", "Napoli"];

console.log(dataArray[0]);
console.log(dataArray[3]);
console.log(dataArray[dataArray.length - 1]);

// come passare in rassegna tutti i valori, le città in esso contenute
let i;
for (i = 0; i < dataArray.length; i++) {
    // TODO document why this block is empty
    console.log(dataArray[i]);
}

// splittare le stringhe con splt() creando così un ARRAY di elementi
let splittedArray = cittaString.split(",");
console.log(splittedArray);

// creare una stringa unendo glie elementi partendo da un array
let nuovaStringaCitta = splittedArray.join(",");
console.log(nuovaStringaCitta);

// aggiungere e rimuovere elementi con push() e pop() che lavorano in coda e quindi alla fine dell' array
// aggiungere e rimuovere elementi con shift() e unshift() che lavorano in testa e quindi all'inizio dell'array

// PUSH & POP
splittedArray.push("Londra", "Dubai", "Salisburgo");
console.log(splittedArray);

splittedArray.pop();
splittedArray.pop();
splittedArray.pop();
console.log(splittedArray);

// SHIFT & UNSHIFT dove:
// UNSHIFT sposta verso sinistra andando ad aggiungere on TOP le stringhe che andiamo ad elencare (un po come PUSH)
splittedArray.unshift("Aosta", "Barcellona", "Madrid");
console.log(splittedArray);

// SHIFT fa il pop a sinistra e quindi eliminando dalla testa un elemento per volta.
splittedArray.shift();
console.log(splittedArray);
splittedArray.shift();
console.log(splittedArray);

