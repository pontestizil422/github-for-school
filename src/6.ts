// Randomly generated TypeScript code
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const myArray = new Array(10).fill(null).map(() => ({
  name: `Name ${getRandomInt(10)}`,
  age: getRandomInt(50),
}));
