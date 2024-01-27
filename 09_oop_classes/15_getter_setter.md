In JavaScript, it is a common convention to name the getter and setter methods the same as the property they are getting or setting. This convention helps maintain a clear and intuitive interface for interacting with objects. It aligns with the idea of using properties as if they were simple data attributes, hiding the details of how the property is implemented or manipulated.

Here are some reasons for using the same name for the property, getter, and setter:

- Intuitive Usage: Naming the getter and setter the same as the property provides a natural and intuitive way to work with objects. It makes the code more readable and self-explanatory.

- Syntactic Sugar: It creates a syntax that looks and behaves like direct property access, even though the getter and setter methods are executed behind the scenes. This makes the code cleaner and more concise.

- Consistency: Using the same name for the property and its associated getter/setter promotes consistency in code. Developers can easily predict the names of methods associated with properties.

```javascript

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Setter for width
  set width(value) {
    this._width = value;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Setter for height
  set height(value) {
    this._height = value;
  }

  // Additional method
  calculateArea() {
    return this._width * this._height;
  }
}

const myRectangle = new Rectangle(5, 10);

console.log(myRectangle.width); // Calls the width getter
console.log(myRectangle.height); // Calls the height getter

myRectangle.width = 8; // Calls the width setter
myRectangle.height = 12; // Calls the height setter

console.log(myRectangle.calculateArea()); // Calls the calculateArea method

```

In JavaScript, when you access a getter as a property (without using parentheses), the getter function is automatically invoked. This is part of the language design to make it appear as if you are directly accessing a property, even though behind the scenes, a method is being called.















> [!IMPORTANT]
> In JavaScript, when you use a setter, the value that you assign to the property is automatically passed as an argument to the setter method

```javascript
class MyClass {
  constructor() {
    this._propertyName = 0;
  }

  // Getter
  get propertyName() {
    return this._propertyName;
  }

  // Setter
  set propertyName(value) {
    // The `value` parameter represents the value being assigned
    this._propertyName = value;
  }
}

// Example usage
const instance = new MyClass();

// Using the setter
instance.propertyName = 42; // Calls the setter method with `value` parameter set to 42

console.log(instance.propertyName); // Calls the getter method, output will be 42

```