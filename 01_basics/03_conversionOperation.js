let score = "Adarsh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)  // NaN
let a = String(score)  // it will print Adarsh
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN -Not a Number
//  true => 1; false => 0

let isLoggedIn = "Adarsh"  //it will print True
//if string is empty "" it'll print False
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Adarsh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  -power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Adarsh"

let str3 = str1 + str2
// console.log(str3);  -hello Adarsh

// console.log("1" + 2);
// depends on first value if it is string the whole operation is treated as string
// console.log(1 + "2");
// depends on first value if it is Number the whole operation is treated as Number
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log( (3 + 4) * 5 % 3);  -this is not a good code readability

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion