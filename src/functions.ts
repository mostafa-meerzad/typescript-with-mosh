// function calcTaxt(income:number){
//     return income * 1.5
// }

function greet(name ?: string): void {
  // name is optional by prefixing it with ?
    console.log("Hello ", name);
  }
  
  greet("Mostafa");
  // define default values for function parameters
  function calcTax(income: number, year = 2020): number {
    if (year > 2022) return income * 1.5;
    return income * 0.3;
  }
  
  console.log(calcTax(20000));
  export {};
  