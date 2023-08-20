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
