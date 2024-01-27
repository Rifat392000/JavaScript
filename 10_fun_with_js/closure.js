
function init() {
    let name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    displayName();
}
init();

function outer(){
    let username = "Rifat"
    
    function inner(){
        let secret = "my123"
        console.log("inner", username);
        function innerTwo(){
        console.log("innerTwo", username);
        console.log(secret);
    }
    innerTwo()
    }
    
    inner()
    
}
outer()



function makeFunc() {
    const name = "Why Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

