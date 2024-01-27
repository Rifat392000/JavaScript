class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

// https://www.w3schools.com/jsref/jsref_class_super.asp#:~:text=Description,the%20parent's%20properties%20and%20methods.

class Teacher extends User{
    constructor(username, email, password){
        super(username) //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const CS = new Teacher("CS", "CS@teacher.com", "123")
CS.logMe()

const admin = new User("admin")
admin.logMe()

console.log(CS instanceof User);
console.log(CS instanceof Teacher);

console.log(admin instanceof User);
console.log(admin instanceof Teacher);
