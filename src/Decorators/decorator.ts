// Decorators are function , conventionally name withh uppercase starting letter

// Decorators are executed when we define the class above which decorator was used, i.e they are not executed when instances of classes are created . They are functions which accept the constructor of  the clas on which they are called on

function Logger(OriginalConstructor: any) {
  console.log("Class Decorator");
  console.log(OriginalConstructor);

  



  // decorator to a class can return a constructor(not must return) but if it does this contructor replace the original contructor of the class
}

function Logger2(text: string) {
  // this is factory version , i.e its return type is of decorator

  return (constructor: Function) => {
    console.log(text);
    console.log(constructor);
  };
}

// decorators are executed in bottom up manner i.e bottom most decporator first
// while factory version are excuted like normal functions execution i.e top down

@Logger
@Logger2("Hey ther this is it")
class Person {
  name: string = "Priyanshu";

  constructor() {
    console.log("Creating Person object ...");
  }
}

// const pers = new Person();

// console.log(pers);

function LogProperty(target: any, propertyName: string | Symbol) {
    console.log("Property decorator!");

  console.log(target,propertyName);
}

function LogAccess(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Access decorator!');
    console.log(target,name,descriptor);



}

function LogMethod(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target, name, descriptor);
}

function LogArgument(target: any, name: string | Symbol, position: number) {
  console.log("Argument decorator!");
  console.log(target, name, position);
}



class Product {
    // this decorator is executed when class definition is executed and this is the decorator for property so gets two arguments
  @LogProperty
  title: string;


  @LogAccess
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - should be positive");
    }
  }
  @LogMethod
  gerProductPrice(@LogArgument num:number){
    return this._price+1;
  }

  constructor(title: string, private _price: number) {
    this.title = title;
  }
}

// decorators don't re-run on instantiating classes, they only run once 

// this is meta programming i.e before programming a programming
