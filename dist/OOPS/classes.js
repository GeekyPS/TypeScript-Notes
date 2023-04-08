"use strict";
/*

Classes are blueprints for objects,so that we can define multiple objects following same structure, same methods.
Thus classes make creation of multiple similar objects much easier



Objects are instances of classes, object can be also separetly decleared without use of classes , but classes make it easier to define multiple similar objects



*/
// classes name start usually with uppercase
class Department {
    // setting a variable private restricts it's access outside the class , only methods inside the class can use or update the variable
    // by default all variables are public
    // id is added to contructor in short hand notation like in dart without the using this keyword
    constructor(id, name) {
        this.id = id;
        // readonly keyword is typecript syntax which prevents the variable to change once it is initialized similar to 'final' in FLUTTER
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log("Dept: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
let dept1 = new Department("id", "Accounting");
dept1.describe();
dept1.addEmployee("dmdd");
console.log(dept1);
/*
Inheritance , ITDepartment is inherited from Department using the 'extends' keyword,
so itdept extends all the properties and methods of dept
*/
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        // super calls the contructor of parent class which accepts an id and name of dept
        // super should be called before using this anywhere in constructor
    }
}
const cse = new ITDepartment("neje", ["PRIYANSHU"]);
console.log(cse);
class AccountingDepartment extends Department {
    // static property can only be called with class name and . and cannot be pointed with this keyword as this points to current instance of the class and staic property is NOT AVAILABLE on instance of the class
    get getLastReport() {
        return this.lastReport;
    }
    set setLastReport(report) {
        this.addReport(report);
        this.lastReport = report;
    }
    constructor(id, reports) {
        // super accepts all argument which the parent accepts , here Department
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // this method overides the method in parent class of this class
    addEmployee(employee) {
        this.employees.push(employee + " hello ther");
        // employees should't be private to access it in this class from which it inherits, so to make it available here use protected keyword with employees array in parent class
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    static createEmployee(name) {
        return { name: name, fiscalYear: this.fiscalYear };
        // this with staic property will only work in static methods otherwise we have to use AccountingDepartment.fiscalYear to get the static property as in other methods this points to instance of the class and static property aren't avaialble in instance of the class
    }
    // since this method is static so it could be directly accessed on class rather than an instance of class
    ;
}
AccountingDepartment.fiscalYear = '2000';
const actDept = new AccountingDepartment('id8', ['Cses']);
actDept.addReport('hello');
actDept.addEmployee('jdkjdkd');
console.log(actDept);
/*
Getters and Setters

getters are methods defined in classes to obtain certian private values but unlike nornal methods they are not called , like in example below

*/
actDept.setLastReport = 'this IS THE SET VALUE OF LAST REPORT';
// setter also unlike normal method have special syntax
console.log(`this is the execution of getter method ${actDept.getLastReport}`);
// notice here getLastReport is not executed as a function but pointed too as it is a special method
/*
Static

new keyword create instance of the class, but come properties and methods could be accessed directly on the class like Math.PI is a property, or Math.pow() is a method which can be directly called on Math class rather than creating a new instance of Math

such properties and methods are called static properties

*/
console.log(AccountingDepartment.createEmployee('THIS IS FROM STATIC METHODS '));
class Club {
    // abstract methods are only available in abstract classes
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    ;
}
// also abstract classes can't be instancciated i.e now Club can only be inherited from , it's no longer a normal class
class CodingClub extends Club {
    // all classes which are inherited from abstract classes must define the abstract method, abstract methods are forced to have in childs of the class from which it is inherited
    constructor(id) {
        super('CodingClub', id);
    }
    describe() {
        console.log(this + 'this is logged from an abstract method');
    }
    static getInstance() {
        // this is the method which is used to get an instance of the class, as since private constructor is used so new could be called only inside the class itself
        if (CodingClub.instance) {
            // an instance of this class already exists 
            return this.instance;
        }
        else {
            this.instance = new CodingClub('id1');
            return this.instance;
        }
    }
}
/*

Singleton class ensures that at a time only one instance of class is present, for describing singleton classes , use private keyword in constructor of the class it prevents calling new keyword on on instantiating the class outside the class but new counld be used inside the class

Simgleton conttructor are rarely used although


*/
const cc = CodingClub.getInstance();
console.log(cc);
