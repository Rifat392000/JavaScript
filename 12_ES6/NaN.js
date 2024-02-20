//NaN Not a Number 
//  if not a Number then return true either return false 

console.log(isNaN(5));
console.log(isNaN('5'));
console.log(isNaN('abc'));
console.log(isNaN([]));
console.log(isNaN([1]));
console.log(isNaN([1,2,3]));
console.log(isNaN({}));

const arr= [1,2,3];
console.log(Array.isArray(arr));

// An arrow function expression is a compact alternative to a traditional function expression, 
// with some semantic differences and deliberate limitations in usage: Arrow functions don't have their 
//  bindings to this , arguments , or super , and should not be used as methods.