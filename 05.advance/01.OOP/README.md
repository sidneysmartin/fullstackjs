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
