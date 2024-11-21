// Interface simple example #1
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExemple: Computer = {
  name: "Asus",
  ram: 16,
  hdd: 500,
};

console.log(computerExemple);
console.log(computerExemple.name);
console.log(computerExemple.ram);
console.log(computerExemple.hdd);

// Interface simple example #2
interface Movie {
  readonly title: string;
  rating?: number;
  director: string;
}

const movieExemple1: Movie = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
};

const movieExemple2: Movie = {
  title: "The Lion King",
  rating: 9,
  director: "Roger Allers",
};

console.log(movieExemple1);
console.log(movieExemple2);
