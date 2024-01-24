"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return `professor ${this.firstName} ${this.lastName}`;
    }
}
class Principle extends Person {
    get fullName() {
        return `Principle ${this.firstName} ${this.lastName}`;
    }
}
function printPeople(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printPeople([
    new Student(1, "Mostafa", "Meerzad"),
    new Teacher("Mosh", "Hamadani"),
    new Principle("Mary", "Smith"),
]);
//# sourceMappingURL=plymophism.js.map