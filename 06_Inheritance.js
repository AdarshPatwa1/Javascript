class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extends used for inheritance to access another class
    constructor(username, email, password){
        super(username) // super refer to extends and extends has access of User class then it can accesa User's Username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);
// instanceof used to check User is instnace of chai or not
// and teacher is also the inherit of chai therefore teacher is also the instance of User