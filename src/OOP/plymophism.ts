class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest(): void {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return `professor ${this.firstName} ${this.lastName}`;
  }
}
class Principle extends Person {
  get fullName() {
    return `Principle ${this.firstName} ${this.lastName}`;
  }
}

function printPeople(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printPeople([
  new Student(1, "Mostafa", "Meerzad"),
  new Teacher("Mosh", "Hamadani"),
  new Principle("Mary", "Smith"),
]);
