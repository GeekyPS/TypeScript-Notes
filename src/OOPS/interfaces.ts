// interface are only available in typescript not in javascript

interface Person {
  name: string;
  age: string;

  // in interface we can't assign values to property just define the structure

  greet(phrase: string): void;
}
let user1: Person;

user1 = {
  name: "Priyanshu",
  age: "21",
  greet(phrase: string) {
    console.log("This is the greeting message" + phrase);
  },
};

// interface is similar to type like , type = Person {...} could also be defined and would work as same, but interface is more strict as it does not support union or intersection as with types

interface Named {
  readonly name?: string;
  outputName?:string;
  // ? signifies optional property
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person1 implements Greetable {
  age: number = 31;
  // we can implement from multiple interfaces by separating them with comma
  constructor(public name?: string) {}
  greet(phrase: string): void {
    console.log(this.name);
  }
}

let user2: Greetable;

user2 = new Person1("Maxi");

console.log(user2);


// interfaces can not only be used f=to define structure of objects but also that of functions 

interface AddFn{
    (a:number,b:number):number;
}

let addi:AddFn;

addi = (a:number,b:number)=> a+b;


