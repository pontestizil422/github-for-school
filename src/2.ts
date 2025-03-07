// A simple function to greet someone by name
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// A function that takes two numbers and returns their sum
function add(a: number, b: number): number {
  return a + b;
}

// A function that takes an array of numbers and returns the average value
function average(numbers: number[]): number {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total / numbers.length;
}
