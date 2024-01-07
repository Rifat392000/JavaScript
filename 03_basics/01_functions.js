
function sayMyName(){
    console.log("Rifat");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ //parameter access

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //argument pass

// console.log("Result: ", result);


function loginUserMessage(username = "Max"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rifat"))



function calculateCartPrice1(...num1){
    return num1
}

 console.log(calculateCartPrice1(200, 400, 500, 2000))



function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice2(200, 400, 500, 2000))

const user = {
    username: "Rifat",
    price: 333
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// handleObject(user)
handleObject({
    username: "Max",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));