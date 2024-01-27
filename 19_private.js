// Using the # syntax (experimental)

// This is the native approach introduced in Stage 3 of the ECMAScript proposal. It utilizes a hash prefix (#) with 
// property names to declare them private. These properties are only accessible within the class and are invisible from outside. 

class User {
    #password;
    #code;
    constructor(username, password,code) {
      this.username = username;
      this.#password = password;
      this.#code = code
    }
  
    getUsername() {
        console.log(this.username);
      console.log(this.#password);

    }
  
    // Cannot access #password directly from outside the class
    
  }
  
  const admin = new User("Rifat","455fhff",456)
console.log(admin.username);
