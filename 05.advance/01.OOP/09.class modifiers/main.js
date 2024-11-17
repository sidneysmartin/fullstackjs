// Example using closures for private and protected members
// public ->
// private ->
// protected ->

function MyClass(publicField, privateField, protectedField) {
  // Public field
  this.publicField = publicField; // global variable

  // Private field (closure)
  const _privateField = privateField; // local variable

  // Protected field (closure)
  const _protectedField = protectedField; // local variable

  //Public Method
  this.publicMethod = function () {
    return `Public Field: ${this.publicField}`;
  };

  // Private Method (closure)
  const _privateMethod = function () {
    return `Private Field: ${_privateField}`;
  };

  // Protected Method (closure)
  const _protectedMethod = function () {
    return `Protected Field: ${_protectedField}`;
  };
  // Method to access protected method -> this keyword allows access to protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObj = new MyClass("Public Value", "Private Value", "Protected Value");

console.log(myObj.publicField); // Public Value
console.log(myObj._privateField); // undefined - private field is not accessible
console.log(myObj._protectedField); // undefined - protected field is not accessible

console.log(myObj.publicMethod()); // Public Field: Public Value
// console.log(myObj._privateMethod()); // TypeError: _privateMethod is not a function
// console.log(myObj._protectedMethod()); // TypeError: _protectedMethod is not a function
console.log(myObj.accessProtectedMethod()); // Protected Field: Protected Value
