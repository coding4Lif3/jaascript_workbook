const Personas = {
    nome: "PIppo",
    cognome: "Pluto",
    eta: 20,
    indirizzo: {
        via: "vattelapesca",
        citta: "Roma",
        cap: 00332
    }
}

console.log(Personas.nome);
console.log(Personas.indirizzo.cap);

// aggiungere un nuovo campo ad un oggetto
Personas.indirizzo.nuovoCampo = 343;
console.log(Personas.indirizzo.nuovoCampo);


// OOP = Object Oriented Programming
// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };

// person.introduceSelf();
// person.bio();

// Simpler syntax for functions in objects
// Questo è un OBJECT LITERAL in quanto abbiamo scritto al suo interno del vero e proprio contenuto senza trattarlo come classe

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};


person.introduceSelf();
person.bio();

// DOT Notation VS Bracket Notation
const person_one = {
    name: {
        first: 'Bob',
        last: 'Smith',
    },
    // …
};

console.log(person_one.name.first);
console.log(person_one.name.last);

// brackes notation accessing
console.log("Whit bracket notation");
console.log(person_one['name']['first']);
console.log(person_one['name']['last']);

/* Dot notation is generally preferred over bracket notation because it is more
 succinct and easier to read. However there are some cases where you have 
 to use brackets. For example, if an object property name is defined at runtime
  then you can't use dot notation to access the value, but you can pass the 
  name as a variable inside brackets as shown with input below: */


function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
}


const salva = new Person('Salva');
salva.name;

salva.introduceSelf();

const frankie = new Person('Frankie');
frankie.name;
frankie.introduceSelf();

console.log(frankie.toString());


/** CLASSI E COSTRUTTORI  */
// If you don't need to do any special initialization, 
// you can omit the constructor, and a default constructor will be generated for you
class Persona {

    name; //property

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }

}

// create a new person
const giles = new Persona('Giles');
giles.introduceSelf(); // Hi! I'm Giles

const pippo = new Persona("Pippo");
pippo.introduceSelf();


// Animal class
class Animal {

    sleep() {
        console.log('zzzzzzz');
    }
}

const spot = new Animal();
spot.sleep(); // 'zzzzzzz'


// INHERITANCE

/** 
Given our Person class above, let's define the Professor subclass.
We use the extends keyword to say that this class inherits from another class.

The Professor class adds a new property teaches, so we declare that.

Since we want to set teaches when a new Professor is created, we define a
constructor, which takes the name and teaches as arguments. 
The first thing this constructor does is call the superclass constructor 
using super(), passing up the name parameter. The superclass constructor takes 
care of setting name. After that the Professor constructor sets the teaches property.

Note: If a subclass has any of its own initialization to do, it must first call 
the superclass constructor using super(), passing up any parameters that 
the superclass constructor is expecting.

*/


class Professor extends Persona {

    teaches; //new property

    //constructor
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }


    // We've also overridden the introduceSelf() method from the superclass,
    // and added a new method grade(), to grade a paper (our professor isn't 
    // very good, and just assigns random grades to papers).
    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }

}

// With this declaration we can now create and use professors:
const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade('my paper'); // some random grade



/**
 * Finally, let's see how to implement encapsulation in JavaScript. In the
 *  last article we discussed how we would like to make the year property of 
 * Student private, so we could change the rules about archery classes without 
 * breaking any code that uses the Student class.
 */


class Student extends Persona {

    #year;
    pollo;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    get getYear() {
        return this.#year;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }

}


/**
 * In this class declaration, #year is a private data property. We can construct 
 * a Student object, and it can use #year internally, but if code outside the
 *  object tries to access #year the browser throws an error:
 */
const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

// summers.#year; // SyntaxError because is a PRIVATE PROPERTY and cannot be accessed outside
console.log("Year Year");
console.log(summers.getYear);


// example of private methods and properties
class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log('You called me?');
    }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

// myExample.#somePrivateMethod(); // SyntaxError




class Insegnante extends Persona {
    materia;
    classiAssegnate;

    constructor(name, materia, classiAssegnate) {
        super(name);
        this.materia = materia
        this.classiAssegnate = classiAssegnate
    }
}

let insFede = new Insegnante('Fede', 'Informatica', ['prima', 'seconda', 'terza'])
let insErica = new Insegnante('Erica', 'Matematica', ['quarta', 'quinta'])
console.log(insErica)
console.log(insFede)


// utilizzo di FETCH e PROMISES
let myPromise = new Promise(function (myResolve, myReject) {
    myResolve(); // when successful
    myReject();  // when error
})