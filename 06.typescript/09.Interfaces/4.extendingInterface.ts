// Interface #5 (Extending Interface)
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGen extends MovieDetails {
  gen: string;
}

const movie1: MovieGen = {
  name: "Avatar",
  ratings: 7,
  printMovieInfo(name: string, price: number, ratings: number) {
    return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  },
  gen: "Action",
};

const res = movie1.printMovieInfo("Avatar", 2500, 8);
console.log(res);
