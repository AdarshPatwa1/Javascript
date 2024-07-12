// this is used for current context

const user = {
    username: "adarsh",
    price: 999,

    welcomemessage: function () {
           console.log('${this.username} , welcome to website');
           console.log(this);
    }
}

user.welcomemessage()  // it'll print adarsh because current context is adarsh according to this
user.username = "sam"  // now current context changes to sam
user.welcomemessage()  // it'll print sam now , current context is sam

console.log(this);  // {} because of node environment this is referring empty object{}

// function chai(){
//  let username = "adarsh"
//  console.log(this.username);
// }

 // chai()

 // const chai = function () {
// let username = "adarsh"  // {}
// console.log(this);
// }



// Chai()

// () => {}  // arrow function

// const addtwo = (num1, num2) => {  // basic arrow function
//    return num1 + num2    // when return keyword is used then it is explicit arrow
// }
 
 // if we use curly braces then return keyword is used
//  but if we are not using curly braces then no need to use return keyword 
//  just use ()  like (num1 + num2)  used below

// const addtwo = (num1, num2) => (num1 +  num2)  // implicit arrow function /assume
// when return keyword is not used the it is implicit

const addtwo = (num1, num2) => ({username: "adarsh"})  // for object

console.log(addtwo(3, 4));

