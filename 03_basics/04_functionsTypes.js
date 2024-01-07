/* Anonymous Functions --> which has basically no name
 In  Anonymous Function we assigned a variable
 
 syntax

 function(){
    return 'Hello'
}
 
 */
const sayHello1=function(){
    return 'Hello'
}
console.log(sayHello1());


/* Callback Functions
/which pass into other functions as a parameter, which is actually a Anonymous Function expression too */
setTimeout(function(){
    return 'Hello'
})

setTimeout(function(){
    console.log('Timeout');
},1000)


/*
Named Functions
---------------------
factory functions
constructor functions

*/

//factory functions
function Coffee(){
    return {}
}

//constructor functions
function Person(n){
    this.name = n
}
const value = new Person('Rifat')


//Object Methods
const me = {
    sayHello: function(){
        console.log("Hello World");
    }
}
me.sayHello();

const user = {
    sayHello(){
        console.log("Hello World");
    }
}
user.sayHello();




//Arrow Functions equivalent Anonymous Functions
const sayHello2=() => {
    return 'Arrow Functions'
}
console.log(sayHello2());


const sayHello3=(name) => {
    return `Hello ${name}`
}
console.log(sayHello3('Rifat'));


const sayHello4= name => {
    return `Hello ${name}`
}
console.log(sayHello4('Atif'));


const sayHello5= name => `Hello ${name}`
console.log(sayHello5('Bob'));

const sayHello6= name => (`Hello ${name}`)
console.log(sayHello6('Alexa'));


const regularFunction = function(){
    console.log(arguments);
}
regularFunction('Chadler','Student',24,"Engineer")


/*
const arrowFunction = () => {
    console.log(arguments);
}
arrowFunction('Chadler','Student',24,"Engineer")

NOT WORK 
*/

//Arrow Functions equivalent Callback Functions
setTimeout(() => {
    console.log('Timeout Arrow Function');
},2000)