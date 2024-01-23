class Person {
  // here we define properties that are shared among all it's child classes
  // defining "parameter properties" this way using "access modifiers"

  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log("walking");
  }
}

// class Student extends Person {
//   // here we don't really need to use "access modifiers" because we have already used them defining these shared properties in the "super class"
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest(): void {
//     console.log("Taking a test");
//   }
// }
// --------------------------
// in the code below we want to override the "fullName" getter function to prefix the teacher name with "professor"
class Teacher extends Person {
  // Note: if you are not going to add more properties to the class you can omit the constructor of the sub-class
  override get fullName(): string {
    // return  `professor ${this.firstName} ${this.lastName}`
    // return  `professor ${this.firstName} ${this.lastName}` // the one way
    return `professor ${super.firstName} ${super.lastName}`; // access the super-class properties in the sub-class because we've already implemented the firstName and lastName properties in the constructor of the super-class
  }
}

const teacher = new Teacher("Mostafa", "Meerzad");

console.log(teacher.fullName);
