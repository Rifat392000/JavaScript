// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// Immediately Invoked Function Expressions (IIFE) is a JavaScript function that runs as soon as it is defined 


// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();
  

// Use cases
// Avoid polluting the global namespace
// Because our application could include many functions and global variables 
// from different source files, it's important to limit the number of global variables.
// If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
// As we will not reuse the code again, using IIFE in this case is better than using a function declaration 
// or a function expression.


(() => {
    // some initiation code
    let firstVariable='Rifat';
    let secondVariable;
    secondVariable=3
    console.log(`${firstVariable} ${secondVariable} Logged in`);
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  

(function Coffee(){
    // named IIFE
    console.log(`DB ONE CONNECTED`);
})();

(function Coffee(db_name,version){
    // named IIFE with parameters
    console.log(`${db_name} DB CONNECTED AND THE VERSION IS ${version}`);
})('GOOGLE',20.3);


( () => { 
    // unnamed IIFE
    console.log(`DB TWO CONNECTED`);
} )();

( (db_name) => { 
    // unnamed IIFE with parameter
    console.log(`${db_name} DB CONNECTED`);
} )('AZURE');



// Sometimes, we need to run a different application after a program has started.
// In such cases, we use an IIFE (Immediately Invoked Function Expression) in a separate file.
// This allows the application to establish a connection with a database immediately upon launch.