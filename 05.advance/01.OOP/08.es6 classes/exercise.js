// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} & I'm ${this.level} years old.`
    );
  }
}

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} & I'm ${this.level} years old. I can ${this.spell}`
    );
  }
}

const hero = new Mega("Zend", "100", "Spell Blade");
console.log(hero);
