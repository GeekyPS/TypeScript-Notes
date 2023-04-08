"use strict";
const names = ["Max", "Manuel"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is done"), 200);
});
promise.then((data) => console.log(data.toLowerCase()));
// these are generic function
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
    // explicitly specifying t and u ensures this function return intersection of t and u, if only object was assigned as type in arguments then .age and .name won't be allowed on merge function result
    // T and U are dynamically assigned when function is called with objA and objB as arguments but they need to be an object as it extends them i.e inherited from
}
const mergeObj = merge({ name: "Priyanshu" }, { age: 310 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    const descriptionText = "Got no value ..";
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    // keyof keyword ensures U is a key of T object
    return obj[key];
}
console.log(extractAndConvert({ name: "hey there !" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    // T is here a generic datatype , i.e it is ensured all elemnts in data array are of one type but that one type is not clearly defined i.e it could either be number , string or anything but all elements of the same type
    additem(item) {
        this.data.push(item);
    }
    removeitem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getitems() {
        return [...this.data];
    }
}
const numberStorage = new DataStorage();
numberStorage.additem(2);
console.log(numberStorage.getitems());
const textStorage = new DataStorage();
textStorage.additem("uoeiyw");
console.log(textStorage.getitems());
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    courseGoal.completeUntil = completeUntil;
    courseGoal.description = description;
    courseGoal.title = title;
    return courseGoal;
}
const people = ['Max', 'Anna'];
// here if only const was used then elements could be pushed to people but making it readonly prevents its push
