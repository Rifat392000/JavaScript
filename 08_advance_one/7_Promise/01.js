let promise = new Promise(function(resolve, reject) {
    resolve(56)
})

console.log("Hello One")

setTimeout(function() {
    console.log("Hello Two")
}, 2000)

console.log("Hello Three")

console.log(promise)


// Fetch google.com homepage  
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script