"use strict";
// class Account {
//   readonly id: number;
//   owner: string;
//   balance: number;
//   nickname?: string; // the nickname might not be present in every account instance, therefore make it optional
//   // this code has a problem that we can access and modify balance property which can lead to problems
//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this.balance += amount;
//   }
// }
// const account = new Account(10, "Mostafa", 0)
// console.log("account info")
// console.log(account.id)
// console.log(account.owner)
// console.log(account.balance)
// console.log("deposit 1000")
// account.deposit(1000)
// console.log("balance after deposit")
// console.log(account.balance)
// console.log("overwrite balance by setting the property outside of the class...")
// account.balance = 0
// console.log("new balance")
// console.log(account.balance)
// apply access control modifiers
class Account {
    // this code has a problem that we can access and modify balance property which can lead to problems
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    // now how to get that private balance value in case we need it, well the simplest way is to create a function that returns that balance value
    getBalance() {
        return this._balance;
    }
}
// from now on accessing or changing the value of balance property isn't possible and gives error
const account = new Account(10, "Mostafa", 0);
console.log("account info");
console.log(account.id);
console.log(account.owner);
// console.log(account.balance) 
console.log(account.getBalance());
console.log("deposit 1000");
account.deposit(1000);
console.log("balance after deposit");
// console.log(account.balance)
console.log(account.getBalance());
console.log("overwrite balance by setting the property outside of the class...");
// account.balance = 0
console.log("new balance");
// console.log(account.balance)
//# sourceMappingURL=index.js.map