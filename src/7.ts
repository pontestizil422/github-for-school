class Greeter {
  greet(name: string): void {
    console.log('Hello, ' + name);
  }
}

const greeter = new Greeter();
greeter.greet('world');
