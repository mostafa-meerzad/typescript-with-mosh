let employee: {
    readonly id: number; // make a property readonly
    name: string;
    fax?: string; // set a property as optional
  } = { id: 1, name: "John" };
  
  // { id: 1, name: "" };
  
  // employee.name = "John";
  // console.log(employee);
  // console.log(employee.name);
  
  // employee.id = 2;
  
  console.log(employee);
  
  let test: { name: string; id: number; greet: (name: string) => void } = {
    name: "mostafa",
    id: 1,
    greet: (name: string) => {
      console.log(name);
    },
  };
  
  // with traditional function syntax
  
  // let dog:{name: string, age:number, eat:(food:string)=>void} = {name: "Snowy", age: 2, eat:function(food:string){
      // console.log("eating ", food)
  // }}
  
  // with arrow function syntax
  
  let dog:{name: string, age:number, eat:(food:string)=>void} = {name: "Snowy", age: 2, eat:(food:string)=>{
      console.log("eating ", food)
  }}
  
  console.log(dog)
  
  dog.eat("snacks")