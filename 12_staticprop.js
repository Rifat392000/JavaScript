class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const admin = new User("admin")

 //console.log(admin.createId())

//  The createId method is defined as a static method in the User class, 
//  so you should access it using the class name (User.createId()) 
//  rather than an instance (admin.createId).

console.log(User.createId());



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const CS = new Teacher("CS", "CS@gmail.com")

//console.log(CS.createId());

console.log(`Teacher id is ${Teacher.createId()}`);