type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// intersection types

const e1: ElevatedEmployee = {
  name: "Priyanshu",
  privileges: ["create-server"],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

const function1 = (emp: UnknownEmployee) => {
  if ("privileges" in emp) {
    // this is the type guard

    console.log(emp.privileges);
  }
};

class Car {
  drive() {
    console.log("Driving a car ...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading target " + amount);
  }
}

type Vehicle = Car | Truck;

const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(90);
  }

  if (vehicle instanceof Truck) {
    // same as above but more elegant
    vehicle.loadCargo(90);
  }
};

useVehicle(v2);

interface Bird {
    type:'bird';
  flyingSpeed: number;
}

interface Horse {
    type:'horse';
    runningSpeed: number;
}


type Animal = Bird | Horse;

const moveAnimal =  (animal:Animal)=>{
    // instanceof is JS so can't be used with interfaces , as interface are only present in typescript, so to solve this problem type additional property is added to both interfaces

    switch(animal.type){
        case 'bird':
            console.log("Moving with speed: "+ animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Moving with speed: '+animal.runningSpeed)   
            break;
    }
  
}


const a1: Horse = {
    type:'horse',
    runningSpeed:90
};

moveAnimal(a1);


const abc = document.getElementById('input-id')! as HTMLInputElement;



abc.value = 'helli';

interface ErrorContainer {

  [prop: string]:string // defines that every property name should be a string and its value should be a string as well

}


const errorBag : ErrorContainer = {
  email:'Not a valid email!',
  username: 'Must start with a capital character!'

};


