function kgToLb(weight: number | string): number {
  // narrowing
  // narrowing a union type into a more specific type
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLb(10))
console.log(kgToLb("10Kg"))
