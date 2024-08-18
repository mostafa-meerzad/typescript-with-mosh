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
function echo<T extends string|number>(value: T): T {
  return value;
}

// we can also constrain types by a shape object like so
function echoPerson<T extends {name: string, age: number}>(value: T): T {
  return value;
}
// or define an interface instead of a shape object
interface NewPerson {
  name: string;
  age: number;
}
function echoPerson2<T extends NewPerson>(value: T): T {
  return value;
}

class PersonClass{
  constructor(public name: string){
    this.name = name;
  }
  walk(){
    return `${this.name} is walking`
  }
  talk (){
    return `${this.name} is talking`
  }
}

class CustomerClass extends PersonClass{
}
// this function now accepts any object that confirms to the PersonClass
function echoPerson3<T extends PersonClass>(value: T): T {
  return value;
}

console.log(echo("hello"))
console.log(echo(100))
console.log(echo(0))

console.log(echoPerson({name: "John", age:30}))
console.log(echoPerson2({name: "Mostafa", age:24}))

echoPerson3(new PersonClass("John"))
echoPerson3(new CustomerClass("Jamie"))
