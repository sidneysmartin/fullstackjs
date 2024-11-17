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
