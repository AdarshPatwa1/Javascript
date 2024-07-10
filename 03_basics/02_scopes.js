// let a = 10
// const b = 20 
// var c = 30

// var c = 300
let a =300 
if (true){
    let a = 10 // it doesnt leak
    const b = 20 // it doesnt leak
    var c = 30  // var leaks  avoid using var
}  // curly braces are scope{}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "adarsh"

    function two() {               // nested function
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}
// one()

if (true) {
    const username = "adarsh"
    if (username === "adarsh") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);  // error because not in scope
}
// console.log(username);  // error because not in scope


//++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

// console.log(addone(5))

//  console.log(addtwo(5))  //error because assigned as expression

const addtwo = function (num) {
    return num + 2
}