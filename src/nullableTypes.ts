function greet(name:string | null| undefined):void{ // you can add even more falsy values by using union-types
    if(name)
        console.log(name.toUpperCase())
    console.log("Hola")
}


greet(null)
greet("John")