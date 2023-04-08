const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This is done"), 200);
});

promise.then((data) => console.log(data.toLowerCase()));

// these are generic function

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };

  // explicitly specifying t and u ensures this function return intersection of t and u, if only object was assigned as type in arguments then .age and .name won't be allowed on merge function result

  // T and U are dynamically assigned when function is called with objA and objB as arguments but they need to be an object as it extends them i.e inherited from
}

const mergeObj = merge({ name: "Priyanshu" }, { age: 310 });
console.log(mergeObj.age);

function countAndDescribe<T>(element: T) {
  const descriptionText = "Got no value ..";

  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // keyof keyword ensures U is a key of T object
  return obj[key];
}
console.log(extractAndConvert({ name: "hey there !" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  // T is here a generic datatype , i.e it is ensured all elemnts in data array are of one type but that one type is not clearly defined i.e it could either be number , string or anything but all elements of the same type

  additem(item: T) {
    this.data.push(item);
  }
  removeitem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getitems() {
    return [...this.data];
  }
}

const numberStorage = new DataStorage<number>();

numberStorage.additem(2);
console.log(numberStorage.getitems());

const textStorage = new DataStorage<string>();

textStorage.additem("uoeiyw");
console.log(textStorage.getitems());

// objects are referenced type in javascript , i.e two objects having exactly same key value pairs can nevr be equal as their address in memory are different

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.completeUntil = completeUntil;
  courseGoal.description = description;
  courseGoal.title = title;

  return courseGoal as CourseGoal;
}

const people: Readonly<string[]> = ['Max','Anna'];
// here if only const was used then elements could be pushed to people but making it readonly prevents its push
