"use strict";
// by type "any" you can call any methods that doesn't exist which is BAD
// function render (document: any){
// document.run()
// document.fly()
// document.whateverWeWant()
// }
// by type "unknown" you can't call any method that doesn't exist
// use type narrowing to first check the type and then call a method or access a property
function render(document) {
    //typeof is only working with primitive-types 
    if (typeof document === "string")
        document.toLowerCase();
    // instanceof is used for object types/ custom types
    if (document instanceof Array)
        document.length;
    // document.whateverWeWant()
}
//# sourceMappingURL=unknownType.js.map