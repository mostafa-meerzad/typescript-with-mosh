"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
let customer = getCustomer(1);
// the old way of checking the customer type
if (customer !== null && customer !== undefined)
    console.log(customer.birthDate);
// console.log(customer.birthDate)// error customer is possibly null
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDate); // by putting a "?" followed by "." we are telling that if customer is not "null" or "undefined" the access the birthDate property (optional chaining)
// console.log(customer?.birthDate.getFullYear()) // getting the same error as previous because we set birthDate as optional
// customers?.[0] // customers is supposed to be an array if it is get the first element otherwise don't do anything
let log = null;
log === null || log === void 0 ? void 0 : log('a'); // optional call
//# sourceMappingURL=optionalChaning.js.map