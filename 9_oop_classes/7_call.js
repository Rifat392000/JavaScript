// https://www.w3schools.com/js/js_this.asp

// Syntax
// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2)
// call(thisArg, arg1, arg2, /* …, */ argN)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call



// The call method in JavaScript is used to invoke a function with a specified this value and arguments
// provided individually. It allows you to explicitly set the this value for a function, which can be
// useful in certain situations. 

const obj1 = { value: 10 };

function getValue() {
    return this.value;
}

const result = getValue.call(obj1);
console.log(result); // Outputs: 10


function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

greet.call(person1, 'Eve'); // Outputs: Hello, Eve! My name is Alice.
greet.call(person2, 'Charlie'); // Outputs: Hello, Charlie! My name is Bob.




function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const Rifat = new createUser("Rifat", "Rifat@fb.com", "123")
console.log(Rifat);