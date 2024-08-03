const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
}) // resolve connection with .then()

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: "adarsh@example.com"}) // passed details through an object
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "adarsh", pass:"adarsh123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => { // thwn used for resolve
    console.log(user);
    return user.username
}).then((username) => {  // chaining
    console.log(username);
}).catch(function(error){ // catch used for reject 
    console.log((error)); 
}).finally(() => console.log("the promise is either resolved or rejected")
)


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javascript", pass:"123"})
        }else {
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumepromisefive(){  // we can use async await as well
    try {                                   // try-catch used for resolve reject both with catch and then
        const response = await promisefive
    console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error); 
})