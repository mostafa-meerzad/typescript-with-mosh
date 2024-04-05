"use strict";
//todo define a function that wraps a value in an array
// without generics doing so is kinda challenge
//   function wrapInArray(value: number){
//     return [value]
//   }
// with generic functions we simply parametrize the type and there we go.
function wrapInArray(value) {
    return [value];
}
const stringArr = wrapInArray("Hello World");
const numberArr = wrapInArray(2024);
const arrArr = wrapInArray(["Hello", "World"]);
//# sourceMappingURL=genericFunctions.js.map