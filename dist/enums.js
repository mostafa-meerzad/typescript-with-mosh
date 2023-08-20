"use strict";
// enums
// const Small = 1
// const Medium = 2
// const Large = 3
var SizeNum;
(function (SizeNum) {
    SizeNum[SizeNum["Small"] = 0] = "Small";
    SizeNum[SizeNum["Medium"] = 1] = "Medium";
    SizeNum[SizeNum["Large"] = 2] = "Large";
})(SizeNum || (SizeNum = {}));
// default values
console.log(SizeNum.Small); // -> 0
console.log(SizeNum.Medium); // -> 1
console.log("sm" /* Size.Small */);
// console.log(Size.Large)
// declare a variable of type Size enum and store the enum-value in it
let mySize = "sm" /* Size.Small */;
console.log(mySize);
//# sourceMappingURL=enums.js.map