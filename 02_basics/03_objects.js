
// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Rifat",
    "full name": "Max Rifat ",
    [mySym]: "mykey1",
    age: 18,
    location: "Dhaka",
    email: "Rifat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Rifat@chatgpt.com"
 //Object.freeze(JsUser)
JsUser.email = "Rifat@microsoft.com"
 //console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} ${this.email}`);
}

JsUser.greeting();
JsUser.greetingTwo();