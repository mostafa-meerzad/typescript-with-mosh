# Typescript

Typescript is a programming language developed by Microsoft, it is like a superset for Javascript allows for type-checking before running our code.

## Installation

`npm install -g typescript` to install Typescript

`tsc -v` to view the Typescript version and confirm the installation

`tsc --init` to initialize a Typescript compiler in your project, you can disable/enable or even change config setting depending on your needs

`rootDir` option of tsconfig file is the path of your source code

by convention you should put your source code in a `src` folder and set the `rootDir` config option to the path of your `src`
and `outDir` set to a directory like `dist` which will contain all of Typescript transpiled code

`"noEmitOnError": true` this option will not compile our code if there is any error

`"removeComments": true` this is also a good option to have enabled to remove comments in the compiled files

## Compiling Ts files to Js

run `tsc filePath` to compile that exact file.

run `tsc` to compile all the files.

## Debugging

first enable `sourceMap` from `tsconfig` which is going to create a sourceMap which is a file that specifies exactly how each line of our `typescript` is mapped to the generated `Javascript` code

for debugging Ts files with vscode debugger

1. create a launch json file then add this script `"prelaunch":"tsc: build - tsconfig.json"` telling Ts compiler to build our app using tsconfig configurations before launching the debugger.
2. start debugger **F5**
   1. **F5** to continue.
   2. **F10** step over in other words go to next line.
   3. **F11** step into get into a function if there is any.
   4. **shift + F11** step out of a function.
   5. **ctrl + shift + F5** to restart the debugging
   6. **shift + F5** to stop debugging

## Built-in types

Js

- string
- number
- boolean
- object
- null
- undefined

Ts

- [any](#any-type)
- unknown
- never
- [array](#array-type)
- [enum](#enum-type)
- [tuple](#tuple-type)
- [function](#functions)

`let name: string = "mostafa"` this is how to annotate the variable type in **Ts**

**typescript** compiler can detect the type of our variables by their values which means we don't always need to annotate the type for variables, if you declare a variable but not initialize it to a value **Ts** compiler assumes it's type as **any**

```ts
let name: string = "John";
let number: number = 123_456_789; // also possible
let number: number = 123456789;
let isPublished: boolean = false;

let course;
```

### any type

type **any** means the variable can hold any kind of values just like a dynamic-typed variable in javascript.

if you declare a variable and not initialize it with a value, **typescript** with give it a default type of **any**
`let course;` by **any** type you lose the benefit of using **typescript**, avoid as much as possible.

if given a function or part of an app that you can not infer the type use **any**

using **any** is against the whole concept of **typescript**

### array type

`let myArray = []` declare an empty array with type **any**, not a good idea, lose of type checking over array elements

need an empty array define the type at the same time

`let numbers: number[] = []` empty array that can only hold numbers

`let numbers: string[] = []` empty array that can only hold strings

### tuple type

a tuple is a fixed-length array where each element has a particular type, often used when working with a pair of values

for each user you want to represent a pair of values

`let user:[number, string] = [1, "Mostafa"]`

### enum type

an enum represents a list of related constants

- numeric enums
- string enums

numeric enums are initialized by default starting from 0 and incremented as you add more

string enums has to be initialized as you add more enums

use PascalCase for naming enums

`enum Size {Small, Medium, Large}` Small by default is initialized by 0, Medium 1 and Large 2

`enum Size {Small = 10, Medium, Large}` Small is 10, Medium 11 and Large 12

`enum Size {Small = "sm", Medium = "md", Large = "lg"}`

`enum SomeEnum {}` will output in a verbose way to solve it just declare your enum as a `const enum SomeEnum {}`

### functions

basically means that you should clarify what values the arguments, and the returned value be if it returns any value otherwise return type is **void** meaning (not returning anything)

**typescript** compiler can infer the return type of your functions

- always annotate you functions

- enable these compiler options as best-practice

  `"noImplicitReturns": true,`

  `"noUnusedParameters": true,`

  `"noUnusedLocals": true,`

```ts
function greet(name: string): void {
  console.log(name);
}
```

use **?** to make a function argument optional in some cases that making an argument optional might cause more errors in such cases provide a default value to avoid getting undefined as argument value.

```ts
function greet(name: string, age?: number): string {
  return `Hello ${name}, How are you!`;
}
```

```ts
function calculateTax(income: number, taxYear: number = 2022) {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.1;
}
```

```ts
function greet(name = "John"): string {
  return `Hello ${name}, How are you!`;
}
```

### objects

defining an object

`let employee: {id:number, name:string} = {id= 1, name:"John"}`

to make an object property readonly you can use **readonly** flag before the property name

readonly property (id is readonly now and you can't change it at run time)

`let employee: {readonly id:number, name:string} = {id= 1, name:"John"}`

optional property

by putting a **?** after object property name

`let myObject:{prop1: string, prop2?:string}` prop2 is now optional, but now you are creating another problem if you try to access prop2 and it is not provided.

```ts
let employee: { readonly id: number; name: string; fax?: string } = {
  id = 1,
  name: "John",
};
```

defining a method to an object

the general syntax is `{methodName:(arg:type)=>type}`

we use **arrow-function** syntax to add a method to our **object**, define method input data-type after that put **=>** and specify return type

```ts
let dog: { name: string; age: number; eat: (food: string) => void } = {
  name: "Sparky",
  age: 3,
  eat: (food: string) => {
    console.log("eating ", food);
  },
};
```

```ts
let employee: { id: number; name: string; retire: (date: Date) => void } = {
  id: 1,
  name: "John",
  retire: (date) => console.log(date),
};
```

## Advanced types

### Type alias

create a **type** and use it multiple times

```ts
let dog: { name: string; age: number; eat: (food: string) => void } = {
  name: "Sparky",
  age: 3,
  eat: (food) => {
    console.log("eating ", food);
  },
};
```

if you need to create more **employee** objects then you need to repeat the above structure or new employee objects might have new properties and do not share a consistent shape, in this situations use **type alias**

`type TypeName = {}` this way we can define a custom type, PascalCase for naming convention

annotate the object with custom type you create

```ts
type Employee = { name: string; age: number; retire: (date: Date) => void };

// now when you create an object annotate it with the custom-type you just created

let john: Employee = {
  name: "John",
  age: 40,
  retire: (date: Date) => {
    console.log(date);
  },
};
```

### union types

define a type that can be either type _A_ or type _B_ or more.

`let weight: number | string`

`weight = 100`

`weight = "100kg"`

with **union types** you can specify more than one type for a variable or function argument.

by using **|** you create a union type `let age:number | string = "23years"` `let age:number | string = 23`

```ts
function kgToLb(weight: number | string): number {
  // narrowing
  // narrowing a union type into a more specific type
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLb(10));
console.log(kgToLb("10Kg"));
```

### intersection types

means to define a type that is a combination of two or more types

create a type that is both of two types

```ts
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
```

### literal types

literal types mean exact types

if you want to limit the values can be assigned to a variable use **literal** types

```ts
// let age: 50 | 100 = 50 // age can only be 50 or 100
// let age: number = 50 // this way age is a number and can be assigned any number

type Age = 50 | 100; // step-up your code this way

let age: Age = 50;

type Quantity = 50 | 100;

let age2: Quantity = 40; // this causes a compilation error

console.log(age);
```

### nullable types

nullable is the act of explicitly allowing your functions/code to accept null values without any side effects.

if you need to work with lets say **null** as a function argument, by default typescript is very restrict about using this kind of values

use **union types** to make it possible to use null values in your app without causing your app to crash

```ts
function greet(name: string | null | undefined): void {
  if (name) console.log(name.toUpperCase());
  console.log("Hola");
}

greet(null);
greet("John");
```

### optional chaining

is the act of accessing array elements, object properties or even calling a function optionally.

if there is an array, object or function defined then get the element, property or call the function

when working with **nullables** we often need to do type checks

```ts
// optional element access operator
customer?.[0]; // access the first element if customer is an array

let log: any = null;
log?.("a"); // optional call
```

### nullish coalescing operator

if you need to check if an input value is **null** or **undefined** then give it a default value otherwise use the input value itself, here is the nullish coalescing operator that comes handy.

```ts
let speed: number | null = null; // speed is an input from the user, (null) if not provided, otherwise use the input

let rid = {
  speed: speed ?? 30, // if speed is null or undefined 30 is used as the default value otherwise speed (the input)is used
};
```

### type assertions

In Typescript, Type assertion is a technique that informs the compiler about the type of a variable. You can use type assertion to specify a value's type and tell the compiler not to deduce it.

in simple words use **type assertion** when you know more about a variable type than **Ts compiler**.

```ts
// let phone = document.getElementById("phone")  // imagine we have an HTML element with this id

let phone = document.getElementById("phone") as HTMLInputElement;

// what happens if you don't use type-assertion here?

// as you can see we are expecting the phone to be an input-element but TS thinks the target element is just a normal HTMLElement thus it complains about accessing the "value" property

// let value = phone.value() // complaining about calling value property

let value = phone.value; // now you can get the value of the input-element
```

```ts
let phone = document.getElementById("phone") as HTMLInputElement; // one way

let phone = <HTMLInputElement>document.getElementById("phone"); // the other way
```

### unknown type

unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

```ts
// by type "any" you can call any methods that doesn't exist which is BAD
// function render (document: any){
// document.run()
// document.fly()
// document.whateverWeWant()
// }

// by type "unknown" you can't call any method that doesn't exist
// use type narrowing to first check the type and then call a method or access a property
function render(document: unknown) {
  //typeof is only working with primitive-types
  if (typeof document === "string") document.toLowerCase();

  // instanceof is used for object types/ custom types
  if (document instanceof Array) document.length;

  // document.whateverWeWant()
}
```

### never type

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

```ts
// processEvents function lets say is a function that run continuously and process a bunch of events
function processEvents(): never {
  while (true) {
    // process an event
  }
}

processEvents();
console.log("something after processing events");
```

## Object Oriented Programming

OOP is one of many programming paradigms for writing application code, in this paradigm **objects** are building blocks of the application that works together to solve problems.

In OOP we have:
![](<./Screenshot(28).png>)

**properties** are like the variables that only exists inside that object.

**method** are the functions that define the behavior/s of an object

![](<./Screenshot(29).png>)

### Creating Classes

A **class** is like a _blueprint_ for creating **objects**

here we have a class:

![](<./Screenshot(30).png>)

```ts
class Account {
  // this part is purely for typescript
  id: number;
  owner: string;
  balance: number;

  // a constructor is a special type of function that is used to initialize on object
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
}
```

The provided code is a TypeScript class definition for an `Account` class. Let's break down the code to understand its components and the reasons behind them:

```typescript
class Account {
  // TypeScript type annotations for class properties
  id: number;
  owner: string;
  balance: number;

  // Constructor method for initializing objects of the class
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
}
```

1. **Class Declaration:**

   - `class Account { ... }`: This declares a TypeScript class named `Account`. A class is a blueprint for creating objects with specific properties and behaviors.

2. **Type Annotations:**

   - `id: number;`, `owner: string;`, `balance: number;`: These lines declare the types of the class properties. In TypeScript, you can specify the types of variables to provide additional information to the compiler and catch potential type-related errors during development.

3. **Constructor Method:**

   - `constructor(id: number, owner: string, balance: number) { ... }`: This is the constructor method of the class. The constructor is a special method called when an object is instantiated from the class. It initializes the object's properties with the values passed as arguments.
   - `id`, `owner`, and `balance` parameters are declared with specific types (`number` and `string`) to enforce that the constructor should receive values of the correct types.

4. **Object Initialization:**

   - `this.id = id;`, `this.owner = owner;`, `this.balance = balance;`: Inside the constructor, these lines assign the values passed as arguments to the corresponding properties of the object being created.

5. **TypeScript Annotations for Initialization:**
   - While the constructor itself is sufficient for initializing objects, the type annotations for class properties (`id: number;`, `owner: string;`, `balance: number;`) provide additional information to developers and tools about the expected types of these properties.

In summary, this TypeScript class is designed to represent an `Account` with three properties (`id`, `owner`, and `balance`). The type annotations help catch potential type-related errors, and the constructor initializes the object with the provided values. The combination of class properties and a constructor allows for the creation of instances of the `Account` class with specific attributes.

### Instantiating a new object from a class

```ts
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

const account = new Account(10, "Mostafa", 0);

console.log(account.id);
console.log(account.owner);
console.log(account.balance);
console.log("deposit 1000");
account.deposit(1000);
console.log(account.balance);
```

### ReadOnly and Optional properties

```ts
class Account {
  // in this implementation the id property can be changed anywhere in this code

  // to solve this issue we can make id property readOnly
  readonly id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    // we can change the id here
    // this.id = 0 // which is not something we wont to happen in our code, it creates bugs!

    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

const account = new Account(10, "Mostafa", 0);

// or we can change id property right here
// account.id = 0

console.log(account.id);
console.log(account.owner);
console.log(account.balance);
console.log("deposit 1000");
account.deposit(1000);
console.log(account.balance);
```

### Access Control Keywords or Access Modifiers

In TypeScript, access modifiers are keywords used to control the visibility and accessibility of class members (properties and methods). There are three main access modifiers in TypeScript:

1. **public:**

   - Members marked as `public` are accessible from any part of the code, both within and outside the class.

   ```typescript
   class Example {
     public x: number;

     constructor(x: number) {
       this.x = x;
     }
   }

   const obj = new Example(10);
   console.log(obj.x); // Accessing public property
   ```

2. **private:**
   - Members marked as `private` are only accessible within the class where they are defined. They cannot be accessed from outside the class.

**Note**: by convention **private** properties are prefixed with an underscore **\_**

```typescript
class Example {
  private x: number;

  constructor(x: number) {
    this.x = x;
  }

  getX(): number {
    return this.x; // Accessing private property within the class
  }
}

const obj = new Example(10);
// console.log(obj.x); // Error: Property 'x' is private and only accessible within class 'Example'.
```

3. **protected:**

   - Members marked as `protected` are similar to `private` members but with an additional feature: they can be accessed by subclasses. They are not accessible from outside the class.

   ```typescript
   class Parent {
     protected x: number;

     constructor(x: number) {
       this.x = x;
     }
   }

   class Child extends Parent {
     printX(): void {
       console.log(this.x); // Accessing protected property in a subclass
     }
   }

   const childObj = new Child(20);
   // we can't access the x property outside the subclass like this:
   childObj.x; // this is going to throw an error

   // console.log(childObj.x); // Error: Property 'x' is protected and only accessible within class 'Parent' and its subclasses.
   ```

By default, if you don't specify an access modifier, TypeScript assumes `public`. It's good practice to explicitly specify access modifiers to make the code more readable and to enforce access control.

### Parameter Properties

In TypeScript, parameter properties are a way to declare and initialize class properties directly in the constructor parameters. This can be a concise way to define and initialize class properties without the need for explicit property declarations in the class body. Parameter properties are commonly used when you want to quickly declare and initialize instance variables based on constructor parameters.

Here's an example:

```typescript
class Person {
  // Using parameter properties
  constructor(public name: string, private age: number) {
    // The properties name and age are automatically created and initialized
    // based on the constructor parameters.
  }

  // Other methods and properties can be defined here.
}

// Usage
const person = new Person("John", 25);
console.log(person.name); // Accessible because 'name' is public
// console.log(person.age); // Error: 'age' is private and cannot be accessed outside the class
```

In the example above, the `name` parameter has the `public` modifier, and the `age` parameter has the `private` modifier. This automatically creates and initializes class properties with the same names in the constructor.

Parameter properties can have access modifiers (`public`, `private`, or `protected`) and can also be marked as `readonly`. The presence of the `readonly` modifier means that the property can only be set during initialization and cannot be modified afterward.

```typescript
class Person {
  // Using parameter properties with access modifiers and readonly
  constructor(public readonly name: string, private readonly age: number) {
    // The properties name and age are automatically created, initialized,
    // and marked as readonly based on the constructor parameters.
  }

  // Other methods and properties can be defined here.
}
```

In this example, both `name` and `age` are marked as `readonly`, meaning their values cannot be changed once they are set in the constructor.

Parameter properties can be a convenient way to reduce boilerplate code when creating classes with properties initialized from constructor parameters.

### Getters and Setter

In TypeScript, getters and setters are used to define and access the properties of a class in a controlled manner. They are a part of the ECMAScript 5 (ES5) property descriptor syntax and provide a way to encapsulate the internal state of an object. Getters are used to retrieve the value of a property, while setters are used to set the value of a property.

Here's a basic example of using getters and setters in TypeScript:

```typescript
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width(): number {
    return this._width;
  }

  // Setter for width
  set width(value: number) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be greater than 0");
    }
  }

  // Getter for height
  get height(): number {
    return this._height;
  }

  // Setter for height
  set height(value: number) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("Height must be greater than 0");
    }
  }

  // Getter for area
  get area(): number {
    return this._width * this._height;
  }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Using the getter
console.log(rectangle.height); // Using the getter
console.log(rectangle.area); // Using the getter

rectangle.width = 8; // Using the setter
rectangle.height = 15; // Using the setter

console.log(rectangle.width); // Using the getter
console.log(rectangle.height); // Using the getter
console.log(rectangle.area); // Using the getter
```

In this example, the `Rectangle` class has private properties `_width` and `_height`, and public getters and setters for these properties. The getters and setters allow controlled access to the internal state of the object, enabling additional logic or validation to be applied when getting or setting the values.

### Index Signatures

In TypeScript, index signatures allow you to define the types of properties that can exist on an object with keys that are not known at compile time. This is particularly useful when working with objects that can have dynamic property names. Index signatures are specified using square brackets `[]` and a specific type for the keys.

Here's a basic syntax for index signatures:

```typescript
interface SomeObject {
  [key: string]: valueType;
}
```

Here, `[key: string]` is the index signature. It indicates that any property with a string key can exist on the object, and the associated value must be of type `valueType`.

Let's look at an example:

```typescript
interface Car {
  brand: string;
  model: string;
  [key: string]: string; // Index signature allowing any additional string properties
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  color: "blue", // Valid
  year: "2022", // Valid
  // someNumber: 123 // Error: Property 'someNumber' does not exist on type 'Car'.
};
```

In this example, the `Car` interface has specific properties `brand` and `model`, and it also allows any additional properties with string keys and string values. This means you can add any string-keyed properties to objects of type `Car` beyond the explicitly declared ones.

It's important to note that the index signature allows you to add properties, but it doesn't enforce that all properties must have the same type. In the example above, the additional properties must be of type `string`, but you could have different values for different properties.

In TypeScript, an index signature allows you to specify the types of properties that are not explicitly defined in the interface. When you use an index signature, it essentially states that any property not explicitly listed in the interface can have the specified type. However, this affects the existing property types because TypeScript enforces consistency between the explicitly defined properties and the index signature.

Here is why it happens:

1. **Type Consistency**: TypeScript ensures that all properties, including those explicitly defined and those accessed via the index signature, are consistent with the index signature's type. If a property type doesn't match the index signature's type, it results in a type conflict.

2. **Design Decision**: This behavior is by design in TypeScript to prevent type inconsistencies and potential runtime errors. If the index signature allows a broader type than the explicitly defined properties, accessing those properties might result in unexpected types.

Here is an example to illustrate this:

### Problematic Code

```typescript
interface Car {
  brand: string; // string
  model: string; // string
  doors: number; // number
  isNew: boolean; // boolean, but index signature doesn't allow boolean
  [key: string]: string | number; // Index signature allows only string or number
}
```

### Why it Causes an Error

In this case, `isNew` is defined as a `boolean`, but the index signature only allows `string | number`. This causes a type conflict because `boolean` is not allowed by the index signature.

### Corrected Code

To correct this, you need to include `boolean` in the index signature:

```typescript
interface Car {
  brand: string;
  model: string;
  doors: number;
  isNew: boolean;
  [key: string]: string | number | boolean; // Include boolean in index signature
}
```

### Explanation

By including `boolean` in the index signature, you ensure that any property, whether explicitly defined or accessed via the index signature, is allowed to be a `string`, `number`, or `boolean`.

### Alternative Approach

If you need stricter type definitions for specific properties and still want to allow additional properties with varying types, consider using a separate property for additional data:

```typescript
interface Car {
  brand: string;
  model: string;
  doors: number;
  isNew: boolean;
  additionalProperties?: {
    [key: string]: string | number | boolean;
  };
}
```

This way, you maintain strict typing for known properties and still have flexibility for additional properties. The known properties are typed explicitly, while `additionalProperties` can store any other properties with the allowed types.

### Static Members

In TypeScript, static members refer to properties or methods that belong to a class itself rather than to instances of the class. They are associated with the class itself, not with the instances created from the class. Static members are declared using the `static` keyword in TypeScript.

Here's an example to illustrate static members in TypeScript:

```typescript
class MyClass {
  static staticProperty: number = 42;

  static staticMethod(): void {
    console.log("This is a static method.");
  }

  instanceProperty: string;

  constructor(value: string) {
    this.instanceProperty = value;
  }

  instanceMethod(): void {
    console.log("This is an instance method.");
  }
}

// Accessing static members without creating an instance
console.log(MyClass.staticProperty); // Output: 42
MyClass.staticMethod(); // Output: This is a static method.

// Creating instances of the class
const instance1 = new MyClass("Instance 1");
const instance2 = new MyClass("Instance 2");

// Accessing instance members
console.log(instance1.instanceProperty); // Output: Instance 1
instance1.instanceMethod(); // Output: This is an instance method.

console.log(instance2.instanceProperty); // Output: Instance 2
instance2.instanceMethod(); // Output: This is an instance method.
```

In this example, `staticProperty` and `staticMethod` are static members of the `MyClass` class. They are accessed directly on the class itself, without the need to create an instance of the class. On the other hand, `instanceProperty` and `instanceMethod` are instance members, and they can be accessed only through instances of the class.

#### Static Members Usage

Static members in TypeScript (and other object-oriented programming languages) serve various purposes and are used in different scenarios. Here are some common use cases for static members:

1. **Shared Data**: Static members are shared among all instances of a class. They provide a way to store data that is common to all instances and is associated with the class itself. This can be useful for maintaining shared state or configuration.

   ```typescript
   class Logger {
     static logLevel: string = "info";

     static log(message: string): void {
       if (Logger.logLevel === "info") {
         console.log(message);
       }
     }
   }

   Logger.log("This is an informational message.");
   ```

2. **Utility Functions**: Static methods can be used to define utility functions that are related to the class but do not depend on the state of any specific instance. These methods can be called directly on the class.

   ```typescript
   class MathUtils {
     static add(x: number, y: number): number {
       return x + y;
     }
   }

   const result = MathUtils.add(3, 5);
   ```

3. **Constants**: Static members can be used to define constants associated with a class. These values are the same for all instances and can be accessed without creating an instance.

   ```typescript
   class Constants {
     static PI: number = 3.14159;
   }

   console.log(Constants.PI);
   ```

4. **Factory Methods**: Static methods can be used to create instances of a class or provide alternative ways of instantiation.

   ```typescript
   class Point {
     constructor(public x: number, public y: number) {}

     static createOrigin(): Point {
       return new Point(0, 0);
     }
   }

   const origin = Point.createOrigin();
   ```

5. **Singleton Pattern**: Static members can be used to implement singleton patterns, ensuring that only one instance of a class is created.

   ```typescript
   class Singleton {
     private static instance: Singleton;

     private constructor() {}

     static getInstance(): Singleton {
       if (!Singleton.instance) {
         Singleton.instance = new Singleton();
       }
       return Singleton.instance;
     }
   }

   const singletonInstance1 = Singleton.getInstance();
   const singletonInstance2 = Singleton.getInstance();
   console.log(singletonInstance1 === singletonInstance2); // true
   ```

These are just a few examples, and the use of static members can vary based on the design and requirements of your application. They provide a way to organize and encapsulate functionality that is associated with a class as a whole rather than with instances of the class.

#### Static Keyword vs Access-Modifiers

No, the `static` keyword is not an access modifier in TypeScript, although it is often used in conjunction with access modifiers.

Access modifiers in TypeScript include `public`, `private`, and `protected`. They define the visibility and accessibility of class members (properties and methods) within and outside the class.

On the other hand, the `static` keyword is used to define static members, which are associated with the class itself rather than with instances of the class. It doesn't control access to the member; instead, it indicates that the member is a part of the class rather than its instances.

Here's a brief summary:

- **Access Modifiers:**

  - `public`: The member is accessible from outside the class.
  - `private`: The member is only accessible within the class.
  - `protected`: The member is accessible within the class and its subclasses.

- **Static Keyword:**
  - `static`: Indicates that the member belongs to the class itself, not to instances. It doesn't affect the visibility or access level; it's more about the nature of the member being shared among all instances.

Example using access modifiers and static keyword:

```typescript
class Example {
  public instanceProperty: number; // Public instance property
  private static staticProperty: string = "Static property"; // Private static property

  constructor(value: number) {
    this.instanceProperty = value;
  }

  static staticMethod(): void {
    console.log("This is a static method.");
    // Accessing static property within the class is allowed
    console.log(Example.staticProperty);
  }
}

const instance = new Example(42);

// Accessing public instance property
console.log(instance.instanceProperty);

// Accessing static method without creating an instance
Example.staticMethod();

// This would cause an error because static properties are not accessible on instances
// console.log(instance.staticProperty);
```

In this example, `instanceProperty` is a public instance property, and `staticProperty` is a private static property. The `static` keyword is used to define `staticMethod`, indicating that it is associated with the class itself.

### Inheritance

In OOP if two or more objects have some commonalities it's best to extract those commonalities and put them in a single place and inherit those commonalities by each sub classes, this way we have effectively avoid repeating ourselves and room for errors.

**two classes sharing same properties**

![two classes sharing same properties](./twoClassesSharingMembers.png)

**two classes inherit their members from a common parent**

![two classes inherit their members](./classesInheritingMembers.png)

**Terminologies**:

in the above example the **Person** class is called: **Parent**, **Super**, **Base**,
and **Student** and **Teacher** classes are called: **Child**, **Sub**, **Derived** recursively

```ts
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

class Student extends Person {
  // here we don't really need to use "access modifiers" because we have already used them defining these shared properties in the "super class"
  constructor(public studentId: number, firstName: string, lastName: string) {
    // in the sub-class constructor we need to call the "super" which is the constructor function of the super-class that this current class is inheriting from and pass needed parameters
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log("Taking a test");
  }
}

const student = new Student(1, "Mostafa", "Meerzad");

console.log(student.firstName);
// console.log(student.firstName)
student.fullName;
student.walk();
student.takeTest();
```

### Method Overriding

In the Inheritance we might come to a situation that we need to override the inherited class-members.

**overriding** means changing it's implementation.

here we have a _Person_ class that is the super class

```ts
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log("walking");
  }
}
```

and a _Teacher_ class which is a **sub-class** of _Person_ which is overriding **fullName** getter function of it's parent

```ts
class Teacher extends Person {
  // Note: if you are not going to add more properties to the class you can omit the constructor of the sub-class
  // when overriding inherited methods we need to use "override" keyword otherwise that method is going to be disconnected from the parent class and act as a property defined only in "Teacher" class
  override get fullName(): string {
    // return  `professor ${this.firstName} ${this.lastName}` // the one way
    return `professor ${super.firstName} ${super.lastName}`; // access the super-class properties in the sub-class because we've already implemented the firstName and lastName properties in the constructor of the super-class
  }
}
```

also there is a compiler option to prevent us from implicitly override inherited method

`"noImplicitOverride": true`

### Polymorphism

Polymorphism in TypeScript refers to the ability of a class or interface to take on multiple forms. It allows a single entity, such as a function, method, or object, to work with different types while maintaining a consistent interface. There are two main types of polymorphism in TypeScript: compile-time (static) polymorphism and runtime (dynamic) polymorphism.

1. **Compile-time Polymorphism (Method Overloading):**
   This type of polymorphism occurs at compile time. It involves defining multiple methods with the same name in a class, but with different parameter types or a different number of parameters. TypeScript will then choose the appropriate method based on the provided arguments during compilation.

   ```typescript
   class Calculator {
     add(x: number, y: number): number {
       return x + y;
     }

     add(x: string, y: string): string {
       return x + y;
     }
   }

   const calculator = new Calculator();
   console.log(calculator.add(2, 3)); // Outputs: 5
   console.log(calculator.add("Hello", "World")); // Outputs: HelloWorld
   ```

2. **Runtime Polymorphism (Inheritance and Method Overriding):**
   Runtime polymorphism occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. It allows objects of different derived classes to be treated as objects of the base class, while still invoking the overridden method of the specific subclass.

   ```typescript
   class Animal {
     makeSound(): void {
       console.log("Generic animal sound");
     }
   }

   class Dog extends Animal {
     makeSound(): void {
       console.log("Woof! Woof!");
     }
   }

   class Cat extends Animal {
     makeSound(): void {
       console.log("Meow");
     }
   }

   const dog: Animal = new Dog();
   const cat: Animal = new Cat();

   dog.makeSound(); // Outputs: Woof! Woof!
   cat.makeSound(); // Outputs: Meow
   ```

In the example above, both `Dog` and `Cat` classes extend the `Animal` class, and they provide their own implementation of the `makeSound` method. When instances of these subclasses are treated as instances of the base class `Animal`, the appropriate overridden method is called at runtime.

Polymorphism helps make code more flexible, reusable, and easier to maintain by allowing the same code to work with different types.

#### Override keyword usage

In TypeScript, the `override` keyword is not explicitly used for method overriding like in some other programming languages (e.g., C#). Instead, TypeScript relies on a more implicit mechanism for method overriding. When you declare a method in a subclass with the same signature as a method in its superclass, TypeScript considers it an override. The overridden method in the subclass is expected to provide a specific implementation.

Here's an example:

```typescript
class Animal {
  makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}
```

In this example, both `Dog` and `Cat` classes extend the `Animal` class and override the `makeSound` method. There's no need for an explicit `override` keyword in TypeScript. The compiler recognizes the method with the same signature in the subclass as an override.

If you mistakenly provide a method in the subclass with a different signature, TypeScript will treat it as a new method, not an override. It's a good practice to use the `override` keyword in other languages, but TypeScript's type system handles this implicitly based on method signatures. Always ensure that the method in the subclass has the same name and signature as the method in the superclass to achieve method overriding.

### Abstract Classes and Methods

In some situations when we are breaking down a more complex problem into smaller ones some classes might appear that doesn't make sense to be used directly and is just making the concepts more concise nothing else, just like **uncooked meal** is part of your launch but is not ready to be eaten yet.

```ts
class Shape {
  constructor(public color: string) {}

  render() {}
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  render(): void {
    console.log("Rendering a Circle");
  }
}
```

**the problem:**
with current implementation we can do something like this:

```ts
const shape = new Shape("red");
shape.render();
```

render method in shape class doesn't have any implementation and logically it doesn't make sense to render a shape object that has no defined shape!

In such cases abstract classes are the solution, which prevents us from making this mistakes
by signing a class as abstract we're telling TS that this specific class is not ready to be used.

```ts
abstract class Shape {
  constructor(public color: string) {}

  render() {}
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  render(): void {
    console.log("Rendering a Circle");
  }
}
```

```ts
const shape = new Shape("red");
```

now we can't create an instance from the shape class

**Note:** Quite often with abstract classes we have abstract methods which has no implementation but must have a return type just as following:

```ts
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}
```

**NOTE:** abstract methods can only exist inside abstract classes.

### Interfaces

In TypeScript, interfaces play a crucial role in defining contracts for object shapes. They allow you to specify the structure that an object should have by defining the properties and their types. Interfaces provide a way to enforce a consistent structure across various parts of your code, making it easier to catch errors and ensure that your code adheres to a predefined structure.

Here's a basic overview of interfaces in TypeScript:

#### Declaring an Interface:

You can declare an interface using the `interface` keyword, followed by the interface name and a set of property declarations:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

#### Using Interfaces:

1. **Object Structure:**
   You can use interfaces to define the structure of objects:

   ```typescript
   const person: Person = {
     firstName: "John",
     lastName: "Doe",
     age: 30,
   };
   ```

   This ensures that the `person` object adheres to the structure specified by the `Person` interface.

2. **Function Signatures:**
   Interfaces can also be used to define function signatures:

   ```typescript
   interface Greeter {
     greet(message: string): void;
   }

   const myGreeter: Greeter = {
     greet(message: string) {
       console.log(`Greetings: ${message}`);
     },
   };
   ```

#### Optional Properties:

You can make certain properties optional in an interface by using the `?` symbol:

```typescript
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}
```

#### Readonly Properties:

You can make properties read-only by using the `readonly` modifier:

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
```

#### Extending Interfaces:

Interfaces can extend other interfaces, creating a new interface that inherits the properties of existing interfaces:

```typescript
interface Employee {
  employeeId: number;
  position: string;
}

interface Manager extends Employee {
  department: string;
}
```

#### Implementing Interfaces (for Classes):

You can use the `implements` keyword to enforce that a class adheres to a particular interface:

```typescript
class EmployeeClass implements Employee {
  employeeId: number;
  position: string;

  constructor(id: number, position: string) {
    this.employeeId = id;
    this.position = position;
  }
}
```

Interfaces in TypeScript are a powerful tool for defining contracts, enabling type checking, and promoting code consistency and maintainability. They are particularly useful in scenarios where you want to ensure that objects or classes conform to a specific structure or behavior.

## Generics

### Understand the problem

consider the following example:

```ts
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

const pair = new KeyValuePair(1, "Apple");
// pair.key here you can view all the methods available for a number
```

`const StringPair = new KeyValuePair("1", "Banana");`

we can not use a **string** instead of a **number**: "Argument of type 'string' is not assignable to parameter of type 'number'."

**we got two solutions**

1. use any type and lose all type-safety and intellisense
2. create a new class that accepts string as key and create a lot of redundancy and need to create new separate classes every time you need to use a different value

_the solution is to have a generic class that can take different value types_

### Generics explained

Generics in TypeScript provide a way to create flexible and reusable components by allowing types to be parameterized. They enable you to write functions, classes, and interfaces that can work with different data types without sacrificing type safety. Generics are particularly useful when you want to write code that is more generic and can handle various data types without explicitly specifying them.

#### Generic classes

in generic classes we put one or more generic-type-parameter
like this and use that type-parameter for the type of properties

```ts
class KeyValuePair<T> {
  constructor(public key: T, public value: string) {}
}
```

**Note:** **T** is pretty common and the idea comes from C++ and it refers to **template-class** but you can use anything you want

```ts
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
// all of these instances are valid and correct
const pair = new KeyValuePair<number, string>(1, "Apple");
const pair = new KeyValuePair<string, string>("1", "Apple");
const pair = new KeyValuePair(1, "Apple");
```

we don't necessarily need to explicitly specify type-parameters since the TS-compiler is smart enough to infer the types from the values provided.

#### Generic Functions

Just like generic classes we can create generic functions.

```ts
// in first implementation we're expecting a number value and can't pass any value other than a number
function wrapInArray(value: number) {
  return [value];
}
// but here the function is in its generic form and accepts any kind of value
function wrapInArray<T>(value: T) {
  return [value];
}

const numArr = wrapInArray(10);
const strArr = wrapInArray("10");
const objArr = wrapInArray({ value: 10 });
```

```ts
class ArrayUtils {
  // a generic function can be an object's method
  wrapInArray<T>(value: T) {
    return [value];
  }
  // a generic function can also be an object's static member
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

const utils = new ArrayUtils();
const numArr = utils.wrapInArray(10);
const strArr = ArrayUtils.wrapInArray("10");
const objArr = utils.wrapInArray({ value: 10 });
const objArr2 = ArrayUtils.wrapInArray({ value: 10 });
```

#### Generic Interfaces

A generic interface can define properties and methods with types that are not specified upfront but are specified when the interface is implemented. This makes the interface flexible and reusable for different types.

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

In this example, GenericIdentityFn is an interface with a type parameter T. It specifies a function signature that takes an argument of type T and returns a value of type T. When we implement this interface with myIdentity, we specify that T should be number, making myIdentity a function that takes a number and returns a number.

#### Generic Constraints

Sometimes with using generics we need to limit the valid types so our application accepts just the types that are valid and not causing it to crash.

```ts
function echo<T extends string | numbers>(value: T): T {
  return echo;
}
```

this generic function only accepts string and number values

not only that, we can also constrain by a shape object like so:

```ts
// constrain the function-argument types to only string and number
function echo<T extends string | number>(value: T): T {
  return value;
}

// we can also constrain types by a shape object like so
function echoPerson<T extends { name: string; age: number }>(value: T): T {
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

class PersonClass {
  constructor(public name: string) {
    this.name = name;
  }
  walk() {
    return `${this.name} is walking`;
  }
  talk() {
    return `${this.name} is talking`;
  }
}

class CustomerClass extends PersonClass {}
// this function now accepts any object that confirms to the PersonClass
function echoPerson3<T extends PersonClass>(value: T): T {
  return value;
}

console.log(echo("hello"));
console.log(echo(100));
console.log(echo(0));

console.log(echoPerson({ name: "John", age: 30 }));
console.log(echoPerson2({ name: "Mostafa", age: 24 }));

echoPerson3(new PersonClass("John"));
echoPerson3(new CustomerClass("Jamie"));
```

#### Extending Generic Classes

Extending generic classes in TypeScript allows you to create new classes that are based on existing generic classes while retaining or modifying their generic properties. This is useful for creating more specific implementations while leveraging the flexibility and type safety of generics.

Here's a step-by-step explanation with an example:

### Step 1: Define a Generic Class

Let's start by defining a generic class. This class will have a type parameter `T` that can be replaced with any type when the class is instantiated.

```typescript
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
```

### Step 2: Extend the Generic Class

To extend the `GenericClass`, you need to specify the type parameter(s) for the new class. You can either use the same type parameter `T` or introduce new type parameters.

#### Example 1: Using the Same Type Parameter

Here, we extend `GenericClass` without introducing new type parameters. The new class `ExtendedGenericClass` will also be generic with type parameter `T`.

```typescript
class ExtendedGenericClass<T> extends GenericClass<T> {
  constructor(value: T) {
    super(value);
  }

  describeValue(): string {
    return `The value is ${this.getValue()}`;
  }
}
```

#### Example 2: Introducing a New Type Parameter

You can introduce new type parameters if needed. Here, `AnotherGenericClass` introduces a new type parameter `U` in addition to `T`.

```typescript
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
```

### Step 3: Instantiate the Classes

You can now create instances of these classes with specific types.

```typescript
const stringInstance = new ExtendedGenericClass<string>("Hello");
console.log(stringInstance.describeValue()); // Output: The value is Hello

const numberStringInstance = new AnotherGenericClass<number, string>(
  42,
  "Answer"
);
console.log(numberStringInstance.getValue()); // Output: 42
console.log(numberStringInstance.getExtraValue()); // Output: Answer
```

### Summary

- **Define a Generic Class**: Create a class with a generic type parameter.
- **Extend the Generic Class**: Create new classes that extend the generic class, using the same or new type parameters.
- **Instantiate the Classes**: Create instances of these extended classes with specific types.

Extending generic classes allows you to build flexible and reusable components that can work with a variety of data types while maintaining type safety.
