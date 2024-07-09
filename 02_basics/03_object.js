// singleton
// Object.create

// object literals  // literals are not a singleton

const mySym = Symbol("key1")  // symbol


const JsUser = {
    name: "Adarsh",   // name, age, location, etc is itself  a string
    "full name": "Adarsh Patwa",
    [mySym]: "mykey1",  // symbol declaration in object
    age: 18,
    location: "Jaipur",
    email: "adarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // to access using .
// console.log(JsUser["email"])  // to acces using[]
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  //to print symbol

JsUser.email = "adarsh@chatgpt.com"
// Object.freeze(JsUser)  // to lock the value
JsUser.email = "adarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());  // Hello JS user
// undefined
console.log(JsUser.greetingTwo());  // Hello JS user, Adarsh
// undefined