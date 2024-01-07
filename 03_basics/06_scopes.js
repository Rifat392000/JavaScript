var c = 300
let a = 300
if (true) {
    let a = 10
    console.log("Inner: ", a);
    const b = 20
    c=50
    
}

console.log("Outer: ", a);
console.log(b);
console.log(c);


function one(){
    const username = "Rifat"

    function two(){
        const website = "Github"
        console.log(username);
    }
    // console.log(website); --->  not possible because not a global scope only function scope

     two()

}

one()

if (true) {
    const username = "Rifat"
    if (username === "Rifat") {
        const website = " Github"
         console.log(username + website);
    }
    // console.log(website);  ---> not possible because not a global scope only function scope
}

// console.log(username); --->  not possible because not a global scope only function scope



// Interesting

console.log(addone(5))

function addone(num){
    return num + 1
}



//console.log();(addTwo(5))---> error

const addTwo = function(num){
    return num + 2
}
