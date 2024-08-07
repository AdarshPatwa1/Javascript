class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){ // it is used to not give access to everyone 
        return `123`
    }
} 

const Adarsh = new User("adarsh")
// console.log(Adarsh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe();
console.log(iphone.createId()); // error cannot access static

