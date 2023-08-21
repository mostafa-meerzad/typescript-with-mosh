// let employee: { name: string; age: number; retire: (date: Date) => void } = {
//   name: "John",
//   age: 40,
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

type Employee = { name: string; age: number; retire: (date: Date) => void }

// now when you create an object annotate it with tye custom-type you just created

let employee: Employee = {
  name: "John",
  age: 40,
  retire: (date: Date) => {
    console.log(date);
  },
};



export {};
