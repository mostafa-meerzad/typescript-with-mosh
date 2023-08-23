// let phone = document.getElementById("phone")  // imagine we have an HTML element with this id

// let phone = document.getElementById("phone") as HTMLInputElement // one way 
let phone = <HTMLInputElement> document.getElementById("phone") // the other way

// HTMLElement // is a generic class for HTML element and the backbone for DOM manipulation in TS

// HTMLInputElement // is a more specific element interface

// what happens if you don't use type-assertion here?

// as you can see we are expecting the phone to be an input-element but TS thinks the target element is just a normal HTMLElement thus it complains about accessing the "value" property 

// let value = phone.value() // complaining about calling value property


let value = phone.value // now you can get the value of the input-element
