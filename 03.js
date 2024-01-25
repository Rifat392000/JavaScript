//Promise Chaining

let p1 = new Promise((resolve, reject) => {
    console.log("Promise 1 execute");
    setTimeout(() => {
            resolve(2)
    }, 2000)
})

p1.then((value) => {
    return new Promise((resolve, reject) => {
        console.log(`Promise ${value} execute`);
            setTimeout(() => resolve(3) , 2000)
    }) 
}).then((value) => {
    console.log(`Promise ${value} execute`);
    return 200
}).then((response)=>{
    console.log(`response ${response}`)
})

