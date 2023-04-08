"use strict";
// Decorators are function , conventionally name withh uppercase starting letter
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators are executed when we define the class above which decorator was used, i.e they are not executed when instances of classes are created . They are functions which accept the constructor of  the clas on which they are called on
function Logger(OriginalConstructor) {
    console.log("Class Decorator");
    console.log(OriginalConstructor);
    // decorator to a class can return a constructor(not must return) but if it does this contructor replace the original contructor of the class
}
function Logger2(text) {
    // this is factory version , i.e its return type is of decorator
    return (constructor) => {
        console.log(text);
        console.log(constructor);
    };
}
// decorators are executed in bottom up manner i.e bottom most decporator first
// while factory version are excuted like normal functions execution i.e top down
let Person = class Person {
    constructor() {
        this.name = "Priyanshu";
        console.log("Creating Person object ...");
    }
};
Person = __decorate([
    Logger,
    Logger2("Hey ther this is it")
], Person);
// const pers = new Person();
// console.log(pers);
function LogProperty(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function LogAccess(target, name, descriptor) {
    console.log('Access decorator!');
    console.log(target, name, descriptor);
}
function LogMethod(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target, name, descriptor);
}
function LogArgument(target, name, position) {
    console.log("Argument decorator!");
    console.log(target, name, position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Price - should be positive");
        }
    }
    gerProductPrice(num) {
        return this._price + 1;
    }
    constructor(title, _price) {
        this._price = _price;
        this.title = title;
    }
}
__decorate([
    LogProperty
], Product.prototype, "title", void 0);
__decorate([
    LogAccess
], Product.prototype, "price", null);
__decorate([
    LogMethod,
    __param(0, LogArgument)
], Product.prototype, "gerProductPrice", null);
// decorators don't re-run on instantiating classes, they only run once 
// this is meta programming i.e before programming a programming
