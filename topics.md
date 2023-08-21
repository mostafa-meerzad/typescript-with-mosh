# Typescript

Typescript is a programming language developed by Microsoft, it is like a superset for Javascript allows for type-checking before running our code.

## Installation

`npm install -g typescript` to install Typescript

`tsc -v` to view the Typescript version and confirm the installation

`tsc --init` to initialize a Typescript compiler in your project, you can disable/enable or even change config setting depending on your needs

`rootDir` option of tsconfig file is the path of your source code

by convention you should put your source code in a **src** folder and set the **rootDir** config option to the path of your **src**
and **outDir** set to a directory like **dist** which will contain all of Typescript transpiled code

## Debugging

first enable **sourceMap** from **tsconfig** which is going to create a sourceMap which is a file that specifies exactly how each line of our **typescript** is mapped to the generated **Javascript** code

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

**typescript** compiler can detect the type of our variables by their value which means we don't always need to annotate the type for variables, if you don't declare a variable but not initialize it to a value **Ts** compiler assumes it's type as **any**

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

* enable these compiler options as best-practice

  `"noImplicitReturns": true,`

  `"noUnusedParameters": true, `

  `"noUnusedLocals": true,`

```ts
function greet(name: string): void {
  console.log(name);
}
```

```ts
function greet(name: string, age?: number): string {
  return `Hello ${name}, How are you!`;
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

readonly property (id is readonly now and you can't change it at run time)

`let employee: {readonly id:number, name:string} = {id= 1, name:"John"}`

optional property

by putting a **?** after object property 

` let myObject:{prop1: string, prop2?:string}` prop2 is now optional, but now you are creating another  problem if you try to access prop2 and it is not provided.


```ts
    let employee: {readonly id:number, name:string, fax?:string} = {id= 1, name:"John"}

```

defining a method to an object

the general syntax is `{methodName:(arg:type)=>type}`

we use **arrow-function** syntax to add a method to our **object**, define method input data-type after that put **=>** and specify return type

```ts
let dog:{name:string, age:number, eat:(food:string)=>void} = {
    name:"Sparky", age:3, eat:(food:string)=>{
        console.log("eating ", food)
    }
}
````

`let employee:{ id:number, name:string, retire:(date:Date)=>void} = {id:1, name:"John", retire:(date:Date)=>console.log(date)}`


## Advanced types

### Type alias

create a **type** and use it multiple times

```ts

let dog:{name:string, age:number, eat:(food:string)=>void} = {
    name:"Sparky", age:3, eat:(food:string)=>{
        console.log("eating ", food)
    }
}

```

if you need to create more **employee** objects then you need to repeat the above structure or new employee objects might have new properties and do not share a consistent shape, in this situations use **type alias**

`type TypeName = {}` this way we can define a custom type, PascalCase for naming convention

annotate the object with custom type you create


```ts

type Employee = { name: string; age: number; retire: (date: Date) => void }

// now when you create an object annotate it with tye custom-type you just created

let john: Employee = {
  name: "John",
  age: 40,
  retire: (date: Date) => {
    console.log(date);
  },
};
```

### union types

define a type that can be either type *A* or type *B* or more.

`let weight: number | string `

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

console.log(kgToLb(10))
console.log(kgToLb("10Kg"))

```


### intersection types

means to define a type that is a combination of two or more types

create a type that is both of two types

```ts
type Draggable = {
    drag:()=>void
}

type Resizable = {
    resize:()=>void
}

type UiWidget = Draggable & Resizable

let textBox: UiWidget = {
    drag:()=>{},
    resize:()=>{}
}
```


### literal types
literal types mean exact types

if you want to limit the values can be assigned to a variable use **literal** types

```ts

// let age: 50 | 100 = 50 // age can only be 50 or 100
// let age: number = 50 // this way age is a number and can be assigned any number

type Age = 50 | 100 // step-up your code this way

let age: Age = 50

type Quantity = 50 | 100

let age2: Quantity = 40 // this causes a compilation error

console.log(age)
```

### nullable types

nullable is the act of explicitly allowing your functions/code to accept null values without any side effects.

if you need to work with lets say **null**  as a function argument, by default typescript is very restrict about using this kind of values

use **union types** to make it possible to use null values in your app without causing your app to crash 
```ts

function greet(name:string | null | undefined):void{
    if(name)
        console.log(name.toUpperCase())
    console.log("Hola")
}


greet(null)
greet("John")
```


### optional chaining

is the act of accessing array elements, object properties or even calling a function optionally.

if there is an array, object or function defined then get the element, property or call the function 

when working with **nullables** we often need to do type checks


```ts
// optional element access operator
customer?.[0] // access the first element if customer is an array


let log: any = null
log?.('a') // optional call
```