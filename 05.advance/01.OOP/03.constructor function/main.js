function createPeople(fN, lN, pL) {
  this.fN = fN;
  this.lN = lN;
  this.pL = pL;
  this.info = function () {
    console.log(
      `Hello my name is ${this.fN} ${this.lN} and I live in ${this.pL}`
    );
  };
}

// NEW KEYWORD
// 1. First create empty object{}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using the "new" keyword

const firstPerson = new createPeople("John", "Doe", "New York");
const secondPerson = new createPeople("Jane", "Flaker", "New York");

firstPerson.info();
secondPerson.info();

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.getInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Pages: ${this.pages}`;
  };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 1925);
const book2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 700, 1954);
const book3 = new Book("The Tool of Titans", "C. S. Lewis", 400, 1950);
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
