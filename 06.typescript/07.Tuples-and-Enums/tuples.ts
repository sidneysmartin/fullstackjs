let myTuple: [number, string];
myTuple = [10, "TypeScript"];

console.log(myTuple);

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

console.log(x);
console.log(y);
console.log(graph);

const products: (number | string)[] = ["item 1", 12];
console.log(products);
console.log(products[0]);
console.log(products[1]);

const games: [string, number, boolean] = ["GTA", 2, true];
console.log(games);
