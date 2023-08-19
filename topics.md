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

- any
- unknown
- never
- enum
- tuple

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

