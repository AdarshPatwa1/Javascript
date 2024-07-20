const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) 

const newNums = myNumers                  // this method is called chaining
                .map((num) => num * 10 )  // now newNums has new array after this operation like 10,20,30...
                .map( (num) => num + 1)   // renwed after this operation like 11,22,33...
                .filter( (num) => num >= 40) // after this newnums be like 41,51,61,71,81,91,101.

console.log(newNums);