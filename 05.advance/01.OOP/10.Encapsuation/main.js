// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Conter() {
  let _count = 0; // Private variable
  // Public method that can access and modify the private variable

  this.increment = function () {
    _count++;
  };
  this.decrement = function () {
    _count--;
  };
  this.getCount = function () {
    return _count;
  };
}

const counter = new Conter();
console.log(counter.getCount()); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
console.log(counter.getCount()); // 3
counter.decrement();
console.log(counter.getCount()); // 2
