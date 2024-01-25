//Promise create
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rifat", email: "rifat@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Rifat", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


/*
[USE CASE]
When connecting our program to a database, we utilize 'async/await.' 
This mechanism allows the program to wait for a certain period, 
ensuring that the database connection is established before proceeding further. 
If the database connection fails, the program will not progress to subsequent steps.
*/

async function consumePromiseFive(){

        const response = await promiseFive
        console.log(response);

}
consumePromiseFive()




const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// async function consumepromiseSix(){

//     const response = await promiseFive
//     console.log(response);

// }
// consumepromiseSix()


/*
[USE CASE]
When connecting our program to a database, we employ 'async/await.'
However,it's important to note that 'async/await' alone may not directly handle errors or rejections.
To effectively manage potential errors, we complement 'async/await' with try and catch blocks. 
This ensures that if the database connection encounters an issue, 
it can be caught and appropriately addressed within the try-catch construct
*/

async function consumepromiseSix(){
    try {
        const response = await promiseSix
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromiseSix()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

 "fetch" is a method in JavaScript used for making network requests. 
 It is commonly used to retrieve data from a server or send data to a server using the HTTP protocol. 
 The term "fetch" is often associated with the `fetch` function in JavaScript, 
 which is a modern alternative to the older `XMLHttpRequest` method for making HTTP requests.


Fetch is given higher priority in the queue, 
meaning that if a fetch call is made alongside other web or Node API calls with the same interval or timing, 
the fetch operation will be executed first.
*/


/*
 The difference is: json() is asynchronous and returns a Promise object that resolves to a JavaScript object.
  JSON. parse() is synchronous can parse a string to (a) JavaScript object(s).
*/

// Two different ways of expressing the same concept.

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/rifat392000')
//         const data = await response.json()
//         console.log(data.login);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()


//Promise consume
fetch('https://api.github.com/users/rifat392000')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data.login);
})
.catch((error) => console.log(error))





// https://dev.to/logrocket/the-fetch-api-is-finally-coming-to-nodejs-foe?comments_sort=oldest


// fetch("http://example.com/api/endpoint")
//   .then((response) => {
//     // Do something with response
//   })
//   .catch(function (err) {
//     console.log("Unable to fetch -", err);
//   });


// You may also change how the fetch process is carried out by appending an optional object after the URL,
//  which allows you to change things like request methods, request headers, and other options. 
//  The request's response is an object that contains the returned metadata for our request, 
//  which consists of elements like response data, headers, request date, and so on.