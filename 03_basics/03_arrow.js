// this is used for current context

const user = {
    username: "adarsh",
    price: 999,

    welcomemessage: function () {
           console.log('${this.username} , welcome to website');
           console.log(this);
    }
}

user.welcomemessage()  // it'll print adarsh because current context is adarsh according to this
user.username = "sam"  // now current context changes to sam
user.welcomemessage()  // it'll print sam now , current context is sam

console.log(this);  // {} because of node environment this is referring empty object{}

// function system(){
//  let username = "adarsh"
//  console.log(this.username);
}