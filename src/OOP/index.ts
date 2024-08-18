abstract class AbstractClass {
  constructor(public name: string) {
    this.name = name;
  }

  abstract log(): string;
}

// const myAbsObj = new AbstractClass("something")
// myAbsObj.log()
// myAbsObj.name
// AbstractClass.log();
