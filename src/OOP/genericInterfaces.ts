// TS also allows to make interfaces generic
// todo: let's imagine we have a website and there are two endpoints:
// http://mywebsite.com/users  for getting the list of users
// http://mywebsite.com/products   for getting the list of products

// now let's define an interface for representing the result of calling one of these endpoints

interface Result<T>{
    data: T | null;
    error: string | null;
}

// todo: define a function which calls one of those endpoints

// because this function returns a generic interface we need to add the generic type-parameter for the function itself as well
function fetch<T>(url: string): Result<T>{
    return {data: null, error: null}
}

interface User{
    username: string;
}
interface Product{
    title: string
}

// fetch();
// let result = fetch<User>("url")
// result.data.username

let result = fetch<Product>("url");
result.data.title