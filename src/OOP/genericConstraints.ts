// interface Person1 {
class Person1 {
  constructor(public name: string) {}
  // name: string;
}

class Customer1 extends Person1 {}
// function echo<T extends Person>(value: T): T { // accepts any value that has the shape of a Person object
// function echo<T extends Customer1 | number | string>(value: T): T {// accepts any object that is a subclass of Person
function echo<T extends Customer1 | number | string>(value: T): T {
  return value;
}

echo("Hello TS");
echo(100);
echo({ name: "Mostafa" });
