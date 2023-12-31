"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new Account(10, "Mostafa", 0);
console.log("account info");
console.log(account.id);
console.log(account.owner);
console.log(account.balance);
console.log("deposit 1000");
account.deposit(1000);
console.log("balance after deposit");
console.log(account.balance);
//# sourceMappingURL=classBasics.js.map