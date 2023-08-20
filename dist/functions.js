"use strict";
// function calcTaxt(income:number){
//     return income * 1.5
// }
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    // name is optional by prefixing it with ?
    console.log("Hello ", name);
}
greet("Mostafa");
// define default values for function parameters
function calcTax(income, year = 2020) {
    if (year > 2022)
        return income * 1.5;
    return income * 0.3;
}
console.log(calcTax(20000));
//# sourceMappingURL=functions.js.map