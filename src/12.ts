const generateRandomTsCode = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  switch (randomNumber) {
    case 0:
      return 'console.log("Hello, world!");';
    case 1:
      return 'const greeting = "Hello"; console.log(`${greeting}, ${name}!`);';
    case 2:
      return 'interface User { name: string; age: number } const user: User = { name: "Alice", age: 30 }; console.log(user.age);';
    case 3:
      return 'class Person { private _name: string; constructor(name: string) { this._name = name; } getName(): string { return this._name; } setName(newName: string): void { this._name = newName; } } const person = new Person("Alice"); console.log(person.getName());';
    case 4:
      return 'function add(a: number, b: number): number { return a + b; } console.log(add(3, 5));';
    case 5:
      return 'const numbers = [1, 2, 3, 4]; const sum = numbers.reduce((a, b) => a + b, 0); console.log(sum);';
    case 6:
      return 'enum Color { Red, Green, Blue } const color = Color.Green; console.log(color);';
    case 7:
      return 'const object = { name: "Alice", age: 30 }; console.log(object.age);';
    case 8:
      return 'function greet(name: string) { console.log(`Hello, ${name}!`); } greet("Bob");';
    default:
      break;
  }
};
