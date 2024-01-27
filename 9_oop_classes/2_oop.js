const user = {
    username: "Rifat",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`); //“this” keyword refers to an object that is executing the current piece of code or context.
        console.log(this);
    }

}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);



// without new keyword User1
console.log("without new keyword User1");

function User1(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //this keyword is often used within methods to refer to the current context or instance of the object.
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const user1One = User1("Smith", 12, true)
const user1Two = User1("Maxwell", 11, false)

console.log(user1One);
console.log(user1Two);

user1One.greeting()
user1Two.greeting() 


// Without the 'new' keyword, no object instance will be created.
// Whenever a new argument is passed, it will overwrite the previous one.




// with new keyword User2
console.log("With new keyword User2");

function User2(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

   return this   
    
}

const user2One = new User2("Alex", 12, true)
const user2Two = new User2("Bob", 11, false)

console.log(user2One);
console.log(user2Two);

user2One.greeting()
user2Two.greeting()

console.log(user2One.constructor);
console.log(user2Two.constructor);


// The 'new' keyword is utilized to instantiate an object by invoking a constructor.

console.log("With new keyword User3");

function User3(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
 
    //return this 
    //this always returned implicitly even not return explicitly
}

const user3One = new User2("Robert", 12, true)
const user3Two = new User2("Zoey", 11, false)

console.log(user3One);
console.log(user3Two);

user3One.greeting()
user3Two.greeting()

console.log(user3One.constructor);
console.log(user3Two.constructor);


// The "new" keyword creates an empty object, essentially functioning
// as an instance of an object constructor. This occurs due to a constructor
// call triggered by the "new" keyword, allowing the passing of arguments.
// After "this" keyword, the parameter passed as an argument is injected by the constructor.
// Ultimately, the newly created instance is returned, facilitating access and manipulation 
// in the rest of the program.