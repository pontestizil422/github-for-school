function sumOfSquares(numbers: number[]): number {
    return numbers.map(number => number * number).reduce((a, b) => a + b);
}

console.log(sumOfSquares([1, 2, 3, 4])); // Output: 20
