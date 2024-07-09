// const tinderUser = new Object()  // Singleton Object
const tinderUser = {}  // Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"   //id,name,isLoggedin are keys
tinderUser.isLoggedIn = false  // 123abc,sammy,false are values

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {        // nested object
        userfullname: {    // nested object
            firstname: "adarsh",
            lastname: "patwa"
        }
    }
}
// console.log(regularUser.fullname);  // { userfullname: { firstname: 'adarsh', lastname: 'patwa' } }
// console.log(regularUser.fullname.userfullname);  // { firstname: 'adarsh', lastname: 'patwa' }
// console.log(regularUser.fullname.userfullname.firstname);  // adarsh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [   // array object
    {
        id: 1,
        email: "h@gmail.com"  // array object
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //True


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
