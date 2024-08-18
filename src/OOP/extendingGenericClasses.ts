// say we have a e-commerce app in which we have Products,Catagories, Shopping-cards and so on

interface Product {
  name: string;
  price: number;
}

// now we want a mechanism for storing these objects
// class Store fro storing different kinds of object Products, Orders, Shopping-cards and so on
class Store<T> {
  private objects: T[] = []; // shouldn't be accessible from the outside we might accidentally wipe it out this array

  // don't need to have a constructor to initialize objects array, it doesn't make scenes

  // create methods for different operations like add, delete and so on

  add(obj: T): void {
    this.objects.push(obj);
  }
}

// create a CompressibleStore anything put in it will be compressed
// passing on generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// new CompressibleStore<Product>().add()
// new CompressibleStore<Product>().compress()

///////////////////////////////////////////////////////////////////////////

class GenericClass<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

class ExtendedGenericClass<T> extends GenericClass<T> {
  constructor(value: T) {
    super(value);
  }

  describeValue(): string {
    return `The value is ${this.getValue()}`;
  }
}

class AnotherGenericClass<T, U> extends GenericClass<T> {
  private extraValue: U;

  constructor(value: T, extraValue: U) {
    super(value);
    this.extraValue = extraValue;
  }

  getExtraValue(): U {
    return this.extraValue;
  }

  setExtraValue(extraValue: U): void {
    this.extraValue = extraValue;
  }
}

const stringInstance = new ExtendedGenericClass<string>("Hello");
console.log(stringInstance.describeValue()); // Output: The value is Hello

const numberStringInstance = new AnotherGenericClass<number, string>(
  42,
  "Answer"
);
console.log(numberStringInstance.getValue()); // Output: 42
console.log(numberStringInstance.getExtraValue()); // Output: Answer
