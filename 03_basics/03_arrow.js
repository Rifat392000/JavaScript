// Define a function that calculates the sum and product of two numbers:
const calculate = ([a, b] = [10, 20]) => {
    const sum = a + b;
    const product = a * b;
  
    return { sum, product };
  };
  
  // Call the function without providing any arguments (uses defaults):
  const result1 = calculate();
  console.log(result1);  // Output: { sum: 30, product: 200 }
  
  // Call the function with an array of numbers:
  const result2 = calculate([5, 8]);
  console.log(result2);  // Output: { sum: 13, product: 40 }
  



//   The parentheses can only be omitted if the function has a single simple parameter.
//  If it has multiple parameters, no parameters, or default, destructured, or rest parameters, 
//  the parentheses around the parameter list are required.




  // Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body brace
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;

  


//   The braces can only be omitted if the function directly returns an expression. 
//   If the body has additional lines of processing, the braces are required — and so is the return keyword. 
//   Arrow functions cannot guess what or when you want to return.

// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
  });
  
  // Arrow function
  (a, b) => {
    const chuck = 42;
    return a + b + chuck;
  };

//   Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. 
//   You can also assign the arrow function to a variable so it has a name

// Traditional Function
function bob(a) {
    return a + 100;
  }
  
  // Arrow Function
  const bob2 = (a) => a + 100;


//   Function body

//   Arrow functions can have either an expression body or the usual block body.
  
//   In an expression body, only a single expression is specified, which becomes the implicit return value. 
//   In a block body, you must use an explicit return statement.


const func1 = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed



// Returning object literals using the expression body syntax (params) => { object: literal } does not work as expected.

// const func3 = () => { foo: 1 };
// Calling func() returns undefined!

// const func4 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

// const func5 = () => { foo() {} };
// SyntaxError: Unexpected token '{'

const func5 = () => ({ foo: 1 });


// Cannot be used as methods
// Arrow function expressions should only be used for non-method functions because they do not have their own this. 
// Let's see what happens when we try to use them as methods:

"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
