"use strict";
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
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() { }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a Circle");
    }
}
const shape = new Shape("red");
// now we can't create an instance from the shape class
shape.render(); // but 
//# sourceMappingURL=abstractClasses.js.map