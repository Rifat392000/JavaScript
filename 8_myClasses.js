function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const alex = new User("alex", "alex@gmail.com", "123")

console.log(alex.encryptPassword());
console.log(alex.changeUsername());