
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
// console.log(loginusermessage())

function calculatecartprice(val1, val2, ...num1){  // ... is spread operator
     return num1  

}

console.log(calculatecartprice(200, 400, 500));  // befoe val1, val2 - [ 200, 400, 500 ]
console.log(calculatecartprice(200, 400, 500, 2000));  // after val1, val2 - [ 500, 2000 ]

const user = {
   username: "adarsh",
   price: 199
}

function handleobject(anyobject) {
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');

}

// handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const mynewarray = [200, 400, 100, 600]

function returnsecondvalue(getarray) {
    return getarray[1]
}

// console.log(returnsecondvalue(mynewarray));  //400
console.log(returnsecondvalue([200, 400, 500, 1000]));