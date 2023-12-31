class Account {
  // in the constructor function prefix the parameters with modifiers
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // now we don't need to initialize the properties here, the compiler does that for us.
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  // this getBalance method is perfectly fine but there is a better way and that is using a getter.
  // getBalance(): number {
  //   return this._balance;
  // }
  get balance(): number {
    return this._balance;
  }

  // define a setter method for the balance-property
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    }
    this._balance = value;
  }
}

const account = new Account(10, "Mostafa", 1000);

// get the account balance
// console.log("accessing the balance using getBalance method")
// console.log(account.getBalance())
console.log("accessing the balance using balance-getter method");
console.log(account.balance);
console.log("set balance using a setter method")
account.balance = 10
console.log("now balance after setting it")
console.log(account.balance);
