
function saymyname(){
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

//saymyname()  // to execute function

// function addtwonumbers(number1, number2) {  // parameters

//    console.log(number1 + number2);
// }

// addtwonumbers()  // NaN
// addtwonumbers(3, 4) // 7  // arguments


function addtwonumbers(number1, number2) {  // parameters
 
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addtwonumbers(3, 5)

// console.log("Result:", result); // Result: 8


function loginusermessage(username) {
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}

// console.log(loginusermessage("adarsh"))
console.log(loginusermessage())
