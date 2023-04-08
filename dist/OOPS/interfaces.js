"use strict";
// interface are only available in typescript not in javascript
let user1;
user1 = {
    name: "Priyanshu",
    age: "21",
    greet(phrase) {
        console.log("This is the greeting message" + phrase);
    },
};
class Person1 {
    // we can implement from multiple interfaces by separating them with comma
    constructor(name) {
        this.name = name;
        this.age = 31;
    }
    greet(phrase) {
        console.log(this.name);
    }
}
let user2;
user2 = new Person1("Maxi");
console.log(user2);
let addi;
addi = (a, b) => a + b;
