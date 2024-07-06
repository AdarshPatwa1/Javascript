const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  // 100.0  -it will put 0's after point(.)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  // it roundoff the value

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //it places , b/w the digits

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  Object [Math] {}
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));  //it will round according to maths format
// console.log(Math.ceil(4.2));   //it will round as max round off value 4.2 = 5
// console.log(Math.floor(4.9));  //it will round as min round off value 4.9 = 4
// console.log(Math.min(4, 3, 6, 8));  
// console.log(Math.max(4, 3, 6, 8));

//console.log(Math.random()); // value is between 0 and 1 only
//console.log((Math.random()*10) + 1);
//console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)