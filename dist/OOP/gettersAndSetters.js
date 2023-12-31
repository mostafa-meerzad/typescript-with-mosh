"use strict";
class Account {
    // in the constructor function prefix the parameters with modifiers
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // now we don't need to initialize the properties here, the compiler does that for us.
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    // this getBalance method is perfectly fine but there is a better way and that is using a getter.
    // getBalance(): number {
    //   return this._balance;
    // }
    get balance() {
        return this._balance;
    }
    // define a setter method for the balance-property
    set balance(value) {
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
account.balance = 10;
console.log(account.balance);
//# sourceMappingURL=gettersAndSetters.js.map