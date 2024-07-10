// let a = 10
// const b = 20 
// var c = 30

// var c = 300
let a =300 
if (true){
    let a = 10 // it doesnt leak
    const b = 20 // it doesnt leak
    var c = 30  // var leaks  avoid using var
}

// console.log(a);
// console.log(b);
console.log(c);