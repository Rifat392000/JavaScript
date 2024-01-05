// singleton
// Object.create
const TeslaUser = new Object()

// const TeslaUser = {}

TeslaUser.id = "123abc"
TeslaUser.name = "Rifat"
TeslaUser.isLoggedIn = false

console.log(TeslaUser);

const regularUser = {
    email: "rifat@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Max",
            lastname: "Rifat"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = { obj1, obj2 }
console.log(obj4);
const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);
const obj6 = {...obj1, ...obj2,...obj3} //best approach
 console.log(obj6);
 


const users = [
    {
        id: 1,
        email: "bob@gmail.com"
    },
    {
        id: 2,
        email: "alex@gmail.com"
    },
    {
        id: 3,
        email: "newton@gmail.com"
    },
]

users[1].email
console.log(users[1].email);

console.log(TeslaUser);

console.log(Object.keys(TeslaUser));
console.log(Object.values(TeslaUser));
console.log(Object.entries(TeslaUser));

console.log(TeslaUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Javascript",
    price: "333",
    courseInstructor: "Rifat"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

