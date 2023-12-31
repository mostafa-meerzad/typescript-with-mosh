class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string; // the nickname might not be present in every account instance, therefore make it optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
  getBalance(): number {
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
console.log(account.balance)
