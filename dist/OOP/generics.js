"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    get keyValue() {
        return this.key;
    }
}
// const pair = new KeyValuePair("name", "Mostafa");
const pair = new KeyValuePair(101, "Mostafa");
console.log(pair.keyValue);
pair.keyValue;
pair.value;
pair.key;
//# sourceMappingURL=generics.js.map