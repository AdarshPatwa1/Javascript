const user = {
    username: "Adarsh",
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user datils from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.lo(this) // current context has nothing- {}

// const promiseOne = new Promise()
// const date = new Date()  
// new keyword is used to create new context

function User(username, logincount, isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Adarsh", 12, true)
const usertwo = new User("chai", 11, false) // owerwrite value
console.log(userOne);
console.log(usertwo);
// 1-whenever new used an empty object/instance is created
// 2-constructor () is called through new it will pack arguments ant return value
// 3-arguments injected into this keyword
// 4-function complete
// new returns new instance always
// new belongs to constructor 

console.log(userOne.constructor);
