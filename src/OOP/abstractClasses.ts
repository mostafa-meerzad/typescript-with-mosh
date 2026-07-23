// class Shape {
//   constructor(public color: string) {}

//   render() {}
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   render(): void {
//       console.log("Rendering a Circle")
//   }
// }
// the problem:
// with current implementation we can do something like this:

// const shape = new Shape("red");
// render method in shape class doesn't have any implementation and logically it doesn't make sense to render a shape object that has not defined shape!
// shape.render();

// In such cases abstract classes are the solution, which prevents us from making this mistakes
// by signing a class as abstract we're telling TS that this specific class is not ready to be used.

// Abstract classes can't be instantiated — they're blueprints for subclasses.
// Abstract methods have no body; every subclass MUST implement them.
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void; // no body — subclasses must provide implementation
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  render(): void {
    console.log("Rendering a Circle");
  }
}

class Square extends Shape {
  constructor(public side: number, color: string) {
    super(color);
  }

  render(): void {
    console.log("Rendering a Square");
  }
}

// const shape = new Shape("red"); // Error: Cannot create an instance of an abstract class

const circle = new Circle(5, "red");
circle.render(); // "Rendering a Circle"

const square = new Square(10, "blue");
square.render(); // "Rendering a Square"
