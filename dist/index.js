"use strict";
// class declaration with class-properties type-annotated and initialization
// class Account {
//   readonly id: number;
//   owner: string;
//   private _balance: number;
//   nickname?: string; // the nickname might not be present in every account instance, therefore make it optional
//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }
//   getBalance(): number {
//     return this._balance;
//   }
// }
// ---------------------------------------------------
// class declaration with parameter-properties to simplify the process
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
    getBalance() {
        return this._balance;
    }
}
//# sourceMappingURL=index.js.map