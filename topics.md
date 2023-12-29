# Typescript

Typescript is a programming language developed by Microsoft, it is like a superset for Javascript allows for type-checking before running our code.

## Installation

`npm install -g typescript` to install Typescript

`tsc -v` to view the Typescript version and confirm the installation

`tsc --init` to initialize a Typescript compiler in your project, you can disable/enable or even change config setting depending on your needs

`rootDir` option of tsconfig file is the path of your source code

by convention you should put your source code in a **src** folder and set the **rootDir** config option to the path of your **src**
and **outDir** set to a directory like **dist** which will contain all of Typescript transpiled code

**"noEmitOnError": true** this option will not compile our code if there is any error

**"removeComments": true** this is also a good option to have enabled to remove comments in the compiled files

## Compiling Ts files to Js

run `tsc filePath` to compile that exact file.

run `tsc` to compile all the files.

## Debugging

first enable **sourceMap** from **tsconfig** which is going to create a sourceMap which is a file that specifies exactly how each line of our **typescript** is mapped to the generated **Javascript** code

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

**typescript** compiler can detect the type of our variables by their values which means we don't always need to annotate the type for variables, if you don't declare a variable but not initialize it to a value **Ts** compiler assumes it's type as **any**

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

`let user = [number, string] = [1, "Mostafa"]`

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

````ts
function calculateTax(income: number, taxYear: number = 2022){

    if(taxYear < 2022){
        return income * 1.2;
    }
    return income * 1.1;
}```

```ts
function greet(name = "John"): string {
  return `Hello ${name}, How are you!`;
}
````

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

`let employee:{ id:number, name:string, retire:(date:Date)=>void} = {id:1, name:"John", retire:(date)=>console.log(date)}`

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


const account = new Account(10, "Mostafa", 0)

// or we can change id property right here 
// account.id = 0

console.log(account.id)
console.log(account.owner)
console.log(account.balance)
console.log("deposit 1000")
account.deposit(1000)
console.log(account.balance)
```