
// enums

// const Small = 1
// const Medium = 2
// const Large = 3

enum SizeNum {Small, Medium, Large}

// default values

console.log(SizeNum.Small) // -> 0
console.log(SizeNum.Medium) // -> 1
// console.log(Size.Large) // -> 2

// enum Size {Small = 10, Medium, Large}
const enum Size {
    Small = "sm",
    Medium = "md",
    Large = "lg",
  } // string enum
  
  console.log(Size.Small)
  // console.log(Size.Large)
  
  // declare a variable of type Size enum and store the enum-value in it
  let mySize: Size = Size.Small;
  console.log(mySize)
  