// array

const myArr = [0, 1, 2, 3, 4, 5]  // array declaration
const myHeors = ["shaktiman", "naagraj"]  // string array

const myArr2 = new Array(1, 2, 3, 4)  // new array
// console.log(myArr[1]);  // index at 1 is 1

// Array methods

// myArr.push(6)  // to add element at last
// myArr.push(7)
// myArr.pop()  // to delete element at last

// myArr.unshift(9)  // to add element at start
// myArr.shift()  // to delete element at start

// console.log(myArr.includes(9));  // to search an element in array
// console.log(myArr.indexOf(3));  // to get the element from index position

// const newArr = myArr.join()  // it converts it into string

// console.log(myArr);  // [ 0, 1, 2, 3, 4, 5 ]
//console.log( newArr);  // 0,1,2,3,4,5


// slice, splice

//slice - it fetch the element from the array
//splice - it fetch the element from the array and delete the element from the array

console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  //[ 1, 2 ]
console.log("B ", myArr);  // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // C  [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]