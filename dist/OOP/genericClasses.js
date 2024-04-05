"use strict";
// --- without generic types -----------
// class KeyValuePair{
//   constructor(public key : number, public value: string){};
// }
// const pair = new KeyValuePair(1, "Apple");
// pair.key here you can view all the methods available for a number
// const StringPair = new KeyValuePair("1", "Banana");
// we can not use a string instead of a number: "Argument of type 'string' is not assignable to parameter of type 'number'."
// we got two solutions
// 1. use any type and lose all type-safety and intellisense
// 2. create a new class that accepts string as key  and create a lot of redundancy and need to create new separate classes every time you need to use a different value
// --- with generic types -----------
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair1 = new KeyValuePair(1, "Apple");
const pair2 = new KeyValuePair("1", "Apple");
const pair3 = new KeyValuePair(1, "Apple");
class ArrayUtils {
    // a generic function can be an object's method
    wrapInArray(value) {
        return [value];
    }
    // a generic function can also be an object's static member
    static wrapInArray(value) {
        return [value];
    }
}
const utils = new ArrayUtils();
const numArr = utils.wrapInArray(10);
const strArr = ArrayUtils.wrapInArray("10");
const objArr = utils.wrapInArray({ value: 10 });
const objArr2 = ArrayUtils.wrapInArray({ value: 10 });
//# sourceMappingURL=genericClasses.js.map