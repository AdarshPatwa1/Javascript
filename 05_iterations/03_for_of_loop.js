// for of 
// array specific loops
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // num is variable name and arr is object
   // console.log(num);    // and can be string object as well
}

const greetings ="Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map() // no dulpicate values only original 
map.set('IN', "India")
map.set('USA', "Uited States of America")
map.set('FR', "France")  // it will only top 3 values 
map.set('IN', "India")   // because 4th one is duplicate

// console.log(map);

for (const [key, value] of map) {  // IN :- India
    console.log(key, ':-', value); // USA :- Uited States of America
}                                  // FR :- France

const myobj = {
    game1: NFS,
    game2: spiderman
}

// for (const [key, value] of myobj) {
//     console.log(key, ':-', value);
// }