# OOP (Object Oriented Programming)

> Object Oriented Programming (OOP) is a programming language model / style organized around objects rather then "actions" and data rather then logic.

> OOp in JavaScript refers to the practice of designing and structuring code around objects and their interactions. It is a programming paradigm that allows developers to model real-world entities and their relationships using objects and classes.

# keyword This

> The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used

- [documentation](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
  | | |
  | ------------- | --------------------------------- |
  | In a method | this refers to the owner object. |
  | Alone | this refers to the global object. |
  | In a function | this refers to the global object. |

### This in a Method

> In an object method, this refers to the "owner" of the method.

```js
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

### this Alone

> When used alone, the owner is the Global object, so this refers to the Global object.

```js
let x = this;
```

### this in a Function (Default)

> In a JavaScript function, the owner of the function is the default binding for this.
> So, in a function, this refers to the Global object [object Window].

```js
function myFunction() {
  return this;
}
```

> A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

[Factory function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?form=MG0AV3)

> Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

[Constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?form=MG0AV3)

> Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

> The Object.Create() method creates a new object, using an existing object as the prototype of the newly created object.

> Every javascript object has a anonymous property called prototype.Remember functions & arrays are also a object, that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods. Every object is associated with another object. The object (a) is associated with [[Prototype]] Object -> which means a object will inherit all properties of Object.prototype || [[Prototype]] [documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

> Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance. In JavaScript, every object has an internal property called [[Prototype]] (often referred to as **proto**), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

> [Class modifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), also known as access modifiers or visibility modifiers, are keywords in OOP languages that define the visibility or accessibility of class members (fields, methods, and nested classes) from other parts of the program. They control the level encapsulation and help enforce encapsulation principles by restricting direct access to certain class members. In JavaScript, class modifiers are used in the context of classes and objects, although JavaScript does not traditional access modifiers like some other object-oriented languages (e.g., Java, C++, etc.).However, you can achieve similar effects using different conventions and techniques. [OOP in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)

# OOP four pillars:

> [Encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation) - Encapsulation is the concept of bundling data (properties) and methods (functions) together withing an object, allowing the object to control access to its internal data and behavior. This helps to hide implementation details and expose only necessary interfaces to interact with the object. In JavaScript, you can achieve encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces

> [Abstraction](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction) - Abstraction is the process of simplifying complex systems by breaking them down smaller, manageable parts. It allows you to focus on the essential features of an object and hide unnecessary details. In JavaScript, you can use abstract classes to define abstract structures and then implement them use abstract classes to define abstract structures and them implement them in concrete objects.

> [Inheritance](https://developer.mozilla.org/en-US/docs/Glossary/Inheritance) - Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This enables code reuse and creation of hierarchical relationships between classes. In JavaScript, inheritance can be achieved through prototype-based inheritance (before ES6) or using ES6 classes (with the extends keyword).

> [Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism) - Polymorphism allows objects to be treated as instances of their parent even if they are instances of a subclass. This facilitates writing code that works different types of objects in a generic way. In JavaScript, polymorphism is achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class. The code can the use the same method to work with both parent and subclass instances.
