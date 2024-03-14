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

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair1 = new KeyValuePair<number, string>(1, "Apple");
const pair2 = new KeyValuePair<string, string>("1", "Apple");
const pair3 = new KeyValuePair(1, "Apple");
