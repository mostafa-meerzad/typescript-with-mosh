// interface Person {
//   name: string;
//   age: number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PersonClass = /** @class */ (function () {
    function PersonClass(name) {
        this.name = name;
        this.name = name;
    }
    PersonClass.prototype.walk = function () {
        return "".concat(this.name, " is walking");
    };
    PersonClass.getPerson = function () {
        return new PersonClass(this.name);
    };
    return PersonClass;
}());
var CustomerClass = /** @class */ (function (_super) {
    __extends(CustomerClass, _super);
    function CustomerClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomerClass;
}(PersonClass));
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
