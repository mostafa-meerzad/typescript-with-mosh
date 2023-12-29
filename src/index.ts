class Account {
  // this part is purely for typescript
  id: number;
  owner: string;
  balance: number;

  // a constructor is a special type of function that is used to initialize on object
constructor(id:number, owner:string, balance:number){
    this.id = id;
    this.owner = owner;
    this.balance = balance;
}

}
