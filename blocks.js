// una funzione o blocco ci permette di inserire all'interno di un nome una serie di azioni che quindi si possono ripetere facilmente
function ciao() {
    console.log("ciao");
}

ciao();

// variable scope dipendono da dove vengono definite. Se ad esempio vengono dichiarate fuori allora sono visibili da qualsiasi parte.
// se le mettiamo internamente alla funzione allora queste vengono definite nel suo interno in modo tale che possano essere utilizzate sempre al suo interno.
// pertanto le variabili definite nella funzione sono disponibili solo nel loro interno e non esternamente.
let nome = "Marco";

function ciao2() {
    let cognome = "Pippo"; // variabile locale nella funzione e quindi non visibile esternamente
    console.log("ciao " + nome + " " + cognome);
}

//console.log(cognome); // infatti se provo a stamparla ricevo l'errore di UNDEFINED.
ciao2();

// funzioni con parametri
function ciaoParam(nome) {
    console.log("Ciao: " + nome);
}

ciaoParam("Pippo");


// esempio di funzioni annidate
function generaTabella() {
    generaHeader();
    generaRighe();
    generaFooter();
}

function generaFooter() {
    console.log("Footer Generato");
}

function generaRighe() {
    console.log("Genera Righe");
}

function generaHeader() {
    console.log("Genera Header");
}

console.log("**** Funzione Annidata ****");
generaTabella();



// come creare una funzione basica, usarla nel codice e aggiungere anche il valore di default del parametro
function salutaConParametroDiDefault(name = "Fede") {
    console.log("Ciao: " + name);
}

salutaConParametroDiDefault();
salutaConParametroDiDefault("pollo");

// parametri di ritorno da utilizzare nelle funzioni
function modificaNome(name = "Fede") {
    return name + " Cognome";
}

console.log(modificaNome("Pollo"));