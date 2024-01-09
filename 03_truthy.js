const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, null, undefined, NaN, empty string ""

//truthy values
// "0", 'false', " ", [], {}, function(){}const count = 0;


const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""




if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// The nullish coalescing (??) operator is a logical operator that
// returns its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.

// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError


// returns "foo"
let v=(null || undefined) ?? "foo";
console.log(v)

let foo;
// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

// The nullish coalescing operator avoids this pitfall by only returning the second operand when the first
//  one evaluates to either null or undefined (but no other falsy values):


const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)



function a() {
    console.log("a was called");
    return undefined;
  }
  function b() {
    console.log("b was called");
    return false;
  }
  function c() {
    console.log("c was called");
    return "foo";
  }
  
  console.log(a() ?? c());
  // Logs "a was called" then "c was called" and then "foo"
  // as a() returned undefined so both expressions are evaluated
  
  console.log(b() ?? c());
  // Logs "b was called" then "false"
  // as b() returned false (and not null or undefined), the right
  // hand side expression was not evaluated
  


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



// Relationship with the optional chaining operator (?.)
// The nullish coalescing operator treats undefined and null as specific values. So does the optional
// chaining operator (?.), which is useful to access a property of an object which may be null or 
// undefined. Combining them, you can safely access a property of an object which may be nullish and 
// provide a default value if it is.

const f = { someFooProp: "hi" };

console.log(f.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(f.someBarProp?.toUpperCase() ?? "not available"); // "not available"


// Terniary Operator

// condition ? condition true then statement execute : condition false then statement execute

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")