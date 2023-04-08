"use strict";
// difference beween let and var is scope of variable, let is only available in the scope it is defined
let age = 20;
if (age > 2) {
    var isOld = true;
}
// console.log(isOld);
// although ts shhows error here but js will execute this file as if isOld is a global variable , but with let that is not the case , so let should be prefered over var
const elements = ["sports", "cricker", "cp", "app-dev"];
const object1 = {
    name: 'Priyanshu',
    age: 321
};
const object2 = Object.assign({ hobbies: elements }, object1);
const allElements = ["hello", ...elements];
const [elemnt, secondElement, ...remainingElements] = elements;
console.log(elemnt, secondElement, remainingElements);
console.log(allElements);
console.log(object2);
