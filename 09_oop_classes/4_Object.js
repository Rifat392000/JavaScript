function multiple(num){

    return num*5
}

multiple.power = 2

console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);


function FoodMenu(name, price) {
    this.name = name;
    this.price = price;
}

FoodMenu.prototype.increment = function (VAT) {
    this.price += VAT;
}

FoodMenu.prototype.printMe = function () {
    console.log(`${this.name} price is ${this.price}`);
}

console.log(FoodMenu.prototype);


const Burger = new FoodMenu("Burger 🍔", 25);
const Pizza = new FoodMenu("Pizza 🍕", 250);

Burger.increment(50);
Pizza.increment(-80);
Burger.printMe();
Pizza.printMe();


// In JavaScript, the `new` keyword is utilized to invoke a constructor when creating an object instance, 
// whereas the JavaScript class does not provide a constructor when using the `new` keyword. However, many 
// programmers from different background paradigms, such as C++ or Java, which are primarily object-oriented 
// programming (OOP) languages, find it a bit confusing. That's why, after ES6, JavaScript introduced the class 
// syntax as syntactic sugar. Behind the scenes, it still operates with prototypes.



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/