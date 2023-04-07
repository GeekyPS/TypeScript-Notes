"use strict";
// intersection types
const e1 = {
    name: "Priyanshu",
    privileges: ["create-server"],
    startDate: new Date(),
};
const function1 = (emp) => {
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
    loadCargo(amount) {
        console.log("Loading target " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(90);
    }
    if (vehicle instanceof Truck) {
        // same as above but more elegant
        vehicle.loadCargo(90);
    }
};
useVehicle(v2);
const moveAnimal = (animal) => {
    // instanceof is JS so can't be used with interfaces , as interface are only present in typescript, so to solve this problem type additional property is added to both interfaces
    switch (animal.type) {
        case 'bird':
            console.log("Moving with speed: " + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Moving with speed: ' + animal.runningSpeed);
            break;
    }
};
const a1 = {
    type: 'horse',
    runningSpeed: 90
};
moveAnimal(a1);
const abc = document.getElementById('input-id');
abc.value = 'helli';
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
