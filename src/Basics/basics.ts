let hobbies: string[] = ["Sports", "Cooking", "Chess"];
let role: [number, string] = [1, "Admin"];
enum Job {
  STUDENT,
  TEACHER,
  PROFESSOR,
}

//JS does not have support for enum by default

const person = {
  name: "Priyanshu",
  age: 30,
  hobbies: hobbies,
  role: role,
  job: Job.PROFESSOR,
};

for (const hobby in person) {
  console.log(hobby);
}

console.log(person.job);
//enums assign number to value
// like her 2 will be printed

// in Loop is used for properties of objects
// of loop is used for elements of arrays

console.log(person.hobbies);






