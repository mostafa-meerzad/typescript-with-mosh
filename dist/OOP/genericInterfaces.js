"use strict";
// TS also allows to make interfaces generic
// todo: let's imagine we have a website and there are two endpoints:
// http://mywebsite.com/users  for getting the list of users
// http://mywebsite.com/products   for getting the list of products
// todo: define a function which calls one of those endpoints
// because this function returns a generic interface we need to add the generic type-parameter for the function itself as well
function fetch(url) {
    return { data: null, error: null };
}
// fetch();
// let result = fetch<User>("url")
// result.data.username
let result = fetch("url");
result.data.title;
//# sourceMappingURL=genericInterfaces.js.map