// Loop come cicli. Loop for, come uscire dai loop con break, come saltare una iterazione con continue e differenze tra
// while e do while nel ciclare 

//lopp semplice
let array = [23, 13, 34, 56, 99, 101];
let i;

// ciclo FOR con break per saltare totalmente il ciclo for. Praticamente quando incontra il break viene bloccato tutto, interrotto il nostro ciclo for
console.log("Stampa con ciclo FOR e break al 56 e quindi esce direttamente dal loop in modo tale che poi i numeri succevi non li considera più");
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == 56) {
        break;
    }
}

// ciclo FOR con continue. Comando molto utile per far si che si vada di colpo all'inizio del ciclo ovviamente cercando di continuare
console.log("Stampa con ciclo FOR e continue se numero è pari");
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        continue; //saltiamo l'iterazione e quindi tutto ciò che si trova dopo continue viene saltato.
    }
    // pertanto il valore viene visualizzato SOLTANTO quando trova un numero pari.
    console.log(array[i]);
}

i = 0;

while (i < array.length) {
    console.log("while: " + array[i]);
    i++;
}

// Tale ciclo viene utilizzato quando effettivamente vogliamo che almeno una iterazione (la prima) venga eseguita senza alcun problema.
// Quindi a differnza del while, visto che il confronto con il valore dell'iteratore viene fatto dopo la prima iterazione, comunque viene eseguita sempre almeno una volta.
i = 0;
do {
    console.log("do while: " + array[i]);
    i++;
} while (i < array.length);


