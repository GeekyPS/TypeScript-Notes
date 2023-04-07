"use strict";
// custom type declartion
const user = {
    name: "Priyanshu",
    age: 21,
};
const combine = (a, b, result) => {
    // union type assignment where a & b could be either string or number
    // result is literal type conversion i.e it could hold specific values only,similar to an enum
    if (typeof a === "number" && typeof b === "number") {
        return a + b + result;
    }
    else {
        return a.toString() + b.toString() + result;
    }
};
console.log(combine(3, 9, "as-string"));
let cfunction;
// this is additional specification that when a & b are number return type of add is a number , so all methods of number could be called
// the above are called function overloads
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
