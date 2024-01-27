//inheritance

const User = {
    name: "Rifat",
    email: "Rifat@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

TeachingSupport.__proto__ = Teacher

// modern syntax
Object.setPrototypeOf(Teacher,User)


console.log(TASupport.isAvailable);
console.log(TASupport.email);



let anotherUsername = "Welcome to Dubai    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Rifat Max".trueLength()
"WhyiceTea".trueLength()

