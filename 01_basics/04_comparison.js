// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);      //this kind of comparison can be avoidable because
console.log(null == 0);     //they have different data types
console.log(null >= 0);
// clean code is the priority
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check

console.log("2" === 2); //now its not a comparison only it'll check datatype as well
//it'll not convert because of differ in datatype