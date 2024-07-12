// Immediately Invoked Function Expressions (IIFE)


(function chai(){
     // named IIFE
    console.log('DB CONNECTED');
})();  // ; is used to end the line and stop context of IIFE
// pollution in global scope beacuse of its variable or whatever declared thats why
// we use IIFE to solve global scope pollution

// ()()  -first(function defination) and 2nd() is IIFE

( (name) => {
    // Unnamed IIFE
    console.log('DB CONNECTED TWO ${name}');
}) ('adarsh')