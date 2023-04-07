type Combinable = number | string;
type User = { name: string; age: number };
// custom type declartion

const user: User = {
  name: "Priyanshu",
  age: 21,
};

const combine = (
  a: Combinable,
  b: Combinable,
  result: "as-string" | "as-text"
) => {
  // union type assignment where a & b could be either string or number

  // result is literal type conversion i.e it could hold specific values only,similar to an enum

  if (typeof a === "number" && typeof b === "number") {
    return a + b + result;
  } else {
    return a.toString() + b.toString() + result;
  }
};

console.log(combine(3, 9, "as-string"));

let cfunction: (a:number,b:string)=>number;

//cfunction is a function which returns number accepting two arguments namely number and string
