class User {
    // Constructor to initialize private properties
    constructor(email, password) {
        // Private property _email
        this._email = email;
        // Private property _password
        this._password = password;
    }

    // Getter method for email property
    get email() {
        // Returns the email in uppercase
        return this._email.toUpperCase();
    }

    // Setter method for email property
    set email(value) {
        // Sets a new value for the email property
        this._email = value;
    }

    // Getter method for password property
    get password() {
        // Returns the password with "admin" appended
        return `${this._password}admin`;
    }

    // Setter method for password property
    set password(value) {
        // Sets a new value for the password property
        this._password = value;
    }
}

// Creating an instance of the User class
const admin = new User("h@admin.ai", "abc");

// Accessing the email property using the getter method
console.log(admin.email); 


