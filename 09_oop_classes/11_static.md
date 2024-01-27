`static` class methods are defined on the class itself.

The `static` keyword defines a `static` method or field for a class
`static` properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

`static` methods are often utility functions, such as functions to create or clone objects, whereas `static` properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```javascript
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}

```