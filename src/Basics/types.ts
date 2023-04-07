let userInput: unknown;

// unknown datatype is more strict than any in typescrpit

userInput = 5;
userInput = "Max";

// let userName: string = userInput;
// above statement was valid if userInput was of any type but now is not valid

const errorHandler = () => {
  throw { message: "This is an error message", code: "404" };

  // this function returns nothing not even undefined , it return never which can't be console logged
};

const result = errorHandler();

console.log(result);
