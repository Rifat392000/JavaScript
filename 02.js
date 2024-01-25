let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending from p1")
    setTimeout(() => {
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending from p2")
    setTimeout(() => {
            reject(new Error("I am an error from p2"))
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})

//To catch the errors
p2.catch((error) => {
        console.log(error)
})


let p3 = new Promise((resolve, reject) => {
    console.log("Promise is pending from p3")
    setTimeout(() => {
            reject(new Error("I am an error from p3"))
    }, 3000)
})

p3.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log("I am an error from p3")
})