// let myName = "Adarsh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// functions,arrays,strings can be initiated through object prototype, but
// object can not be initiated through functions, arrays, strings prototype because these are objects 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// To create own Object Prototype
Object.prototype.Adarsh = function(){
    console.log(`Adarsh is present in all objects`);
}
// To create own Array Prototype
Array.prototype.heyAdarsh = function(){
    console.log(`Adarsh says hello`);
}

// heroPower.Adarsh()
// myHeros.Adarsh() // array is object thats why it has power of object prototype
// myHeros.heyAdarsh()
// heroPower.heyAdarsh() // no power because heropower is an object and heyAdarsh() is array prototype

// inheritance

//Outdated Syntax
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  
    // __proto__ is used to link objects in older times but now we can create our own object prototype and link multiple objects through it
}

Teacher.__proto__ = User // to acces outside scope

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Adarsh".trueLength()
"iceTea".trueLength()