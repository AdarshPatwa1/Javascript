const name = "adarsh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this is the new format ${variable}

const gameName = new String('adarsh-ap-com')

// console.log(gameName[0]);  //'a' according to key value pair
// console.log(gameName.__proto__);  //object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  - at 2 there is t
// console.log(gameName.indexOf('t'));  -index of t is 2

const newString = gameName.substring(0, 4)  
console.log(newString);  // it will from 0 to 3 "adar"

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);

const newStringOne = "   adarsh    "
console.log(newStringOne);
console.log(newStringOne.trimStart());

const url = "https://adarsh.com/adarsh%20patwa"

console.log(url.replace('%20', '-'))

console.log(url.includes('patwa'))  //it will identify if there is mentioned string is present or not

console.log(gameName.split('-'));