type Customer = {
    birthDate ? :  Date
}


function getCustomer (id:number): Customer | null | undefined { // undefined is added later to add one more step of checking
return id === 0 ? null : {birthDate: new Date()} 
}

let customer = getCustomer(1)

// the old way of checking the customer type
if (customer !== null && customer !== undefined)
    console.log(customer.birthDate)


// console.log(customer.birthDate)// error customer is possibly null
console.log(customer?.birthDate) // by putting a "?" followed by "." we are telling that if customer is not "null" or "undefined" the access the birthDate property (optional chaining)


// console.log(customer?.birthDate.getFullYear()) // getting the same error as previous because we set birthDate as optional

// customers?.[0] // customers is supposed to be an array if it is get the first element otherwise don't do anything

let log: any = null
log?.('a') // optional call



