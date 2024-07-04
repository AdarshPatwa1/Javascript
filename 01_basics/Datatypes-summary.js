//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol(Unique Identity), BigInt

const score = 100  //console.log(typeof score);  -Number
const scoreValue = 100.3  //console.log(typeof scoreValue);  -Number

const isLoggedIn = false  //console.log(typeof isLoggedIn);  -Boolean
const outsideTemp = null  //console.log(typeof outsideTemp);  -object
let userEmail;

const id = Symbol('123')  //console.log(typeof id);  -Symbol
const anotherId = Symbol('123')  //console.log(typeof anotherId);  -Symbol

console.log(id === anotherId);

const bigNumber = 3456543576654356754n  //console.log(typeof bigNumber);  -Bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //console.log(typeof heros);  -Object
let myObj = {
    name: "Adarsh",  //Object
    age: 20,
}

const myFunction = function(){  //Function Object
    console.log("Hello world");
}

    console.log(typeof myFunction);  //console.log(typeof myFunction);  -Object Function

// https://262.ecma-international.org/5.1/#sec-11.4.3


//*****************************************************************************************

//Stack (Primitive)  -we get the copy of the variable declared
//Heap (Non Primitive)  - we get the reference (Original Value) of the variable declared

let myname = "Adarsh"

let anothername = myname
anothername = "Something"

console.log(myname);
console.log(anothername);

let userone = {
   email: "user@google.com",
   upi: "user@ybl",

}

let usertwo = userone

usertwo.email = "adarsh@google.com"

console.log(userone.email);
console.log(usertwo.email);
