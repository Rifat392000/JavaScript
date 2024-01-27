// ES6

function randomSalt() {
    // Generate random bytes using a cryptographically secure method
    const randomBytes = crypto.getRandomValues(new Uint8Array(10));
    return String.fromCharCode(...randomBytes); // Convert to ASCII string
  }
  
  async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  
  class User { 
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.hashedPassword = null;
      this.salt = randomSalt();
    }
  
    async encryptPassword() {
      this.hashedPassword = await hash(this.password + this.salt);
      console.log(`Password ${this.hashedPassword} and salt ${this.salt}`);
      this.changeUsername();
    }
  
    changeUsername() {
      this.username = this.username.toUpperCase(); // Modify the username
      console.log(`Username : ${this.username}`);
    }
  }
  
  const rifat = new User("Rifat", "Rifat@gmail.com", "123"); 
  const alex = new User("Alex", "Alex@gmail.com", "1A2wr");
  
  async function run() {
    await alex.encryptPassword();
    await rifat.encryptPassword();
  }
  
  run(); // Call the run function to initiate actions
  