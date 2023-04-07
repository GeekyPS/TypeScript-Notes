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
//cfunction is a function which returns number accepting two arguments namely number and string
