// Exercise 1: Basic Example
// This is an example of basic TypeScript syntax.
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Exercise 2: Returning values from functions
function getAge(name: string): number {
    let age = 18;
    if (name === "Alice") {
        age *= 2;
    }
    return age;
}

let aliceAge = getAge("Alice");
console.log(aliceAge); // Output: 36

// Exercise 3: Using variables in functions
function calculateSalary(name: string, salaryBase: number): number {
    let taxRate = 0.18; // 18% tax rate
    return salaryBase * (1 - taxRate);
}

let employeeSalaries = [40000, 50000, 60000];
calculateSalary("John", employeeSalaries);
console.log(calculateSalary(employeeSalaries[2], calculateSalary(employeeSalaries[0], calculateSalary(employeeSalaries[1], 30000)))); // Output: 14785
