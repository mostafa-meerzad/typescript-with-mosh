"use strict";
// interface Person {
//   name: string;
//   age: number;
// }
// class Person1 {
//   constructor(public name: string) {}
//   // name: string;
// }
// class Customer1 extends Person1 {}
// // function echo<T extends Person>(value: T): T { // accepts any value that has the shape of a Person object
// // function echo<T extends Customer1 | number | string>(value: T): T {// accepts any object that is a subclass of Person
// function echo<T extends Customer1 | number | string>(value: T): T {
//   return value;
// }
// echo("Hello TS");
// echo(100);
// echo({ name: "Mostafa" });
// constrain the function-argument types to only string and number
function echo(value) {
    return value;
}
// we can also constrain types by a shape object like so
function echoPerson(value) {
    return value;
}
function echoPerson2(value) {
    return value;
}
class PersonClass {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    walk() {
        return `${this.name} is walking`;
    }
    static getPerson() {
        return new PersonClass(this.name);
    }
}
class CustomerClass extends PersonClass {
}
// this function now accepts any object that confirms to the PersonClass
function echoPerson3(value) {
    return value;
}
console.log(echo("hello"));
console.log(echo(100));
console.log(echo(0));
console.log(echoPerson({ name: "John", age: 30 }));
console.log(echoPerson2({ name: "Mostafa", age: 24 }));
console.log(echoPerson3({ name: "Mostafa", age: 24 }));
echoPerson3(new PersonClass("John"));
echoPerson3(new CustomerClass("Jamie"));
echoPerson3({ name: "soemthing" });
//# sourceMappingURL=genericConstraints.js.map