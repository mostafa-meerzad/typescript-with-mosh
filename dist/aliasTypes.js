"use strict";
// let employee: { name: string; age: number; retire: (date: Date) => void } = {
//   name: "John",
//   age: 40,
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
Object.defineProperty(exports, "__esModule", { value: true });
// now when you create an object annotate it with tye custom-type you just created
let employee = {
    name: "John",
    age: 40,
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=aliasTypes.js.map