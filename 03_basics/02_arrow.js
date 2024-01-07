
//Object
const user = {
    username: "Alex",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website and your balance is ${this.price}`);
        console.log(this);
    }

}

//this keyword generally refers to the current object or instance within a method or constructor.
user.welcomeMessage()

user.username = "Rifat"
user.welcomeMessage()

user.username = "Bob"
user.price=5000
user.welcomeMessage()

 console.log(this); // generally return empty object in node environment but return window object in browser


function Coffee1(){
    let username = "Rifat"
    // console.log(this.username);  undefined [Only use in a object]
    console.log(this);
}

Coffee1()


const Coffee2 = function () {
    let username = "Rifat"
    // console.log(this.username);  undefined [Only use in a object]
    console.log(this);
}

Coffee2()


const Coffee3 =  () => {
    let username = "Rifat"
    // console.log(this.username);  undefined [Only use in a object]
    console.log(this);
}

Coffee3()

//arrow function syntax

//      () => expression

//      param => expression

//      (param) => expression

//      (param1, paramN) => expression

//      () => {
//          statements
//      }

//      param => {
//          statements
//      }

//      (param1, paramN) => {
//          statements
//      }


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions



const addTwo1 = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo1(3, 4))


const addTwo2 = (num1, num2) =>  num1 + num2        //return value

console.log(addTwo2(7, 5))


const addTwo3 = (num1, num2) =>  result= num1 + num2        //return value

console.log(addTwo3(525, 1035))



const addTwo4 = (num1, num2) => ( num1 + num2 )    //return value

console.log(addTwo4(55, 125))



const addTwo5 = (num1, num2) => ({username: "Rifat"}) // return object

console.log(addTwo5(121, 365)) 




