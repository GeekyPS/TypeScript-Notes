const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This is done"), 2000);
});


promise.then(data=>console.log(data.toLowerCase()));


// this are generic function

function merge<T, U>(objA:T,objB:U){
    return {...objA,...objB};

    // explicitly specifying t and u ensures this function return intersection of t and u, if only object was assigned as type in arguments then .age and .name won't be allowed on merge function result

    // T and U are dynamically assigned when function is called with objA and objB as arguments
}

const mergeObj =  merge({name:'Priyanshu'},{age:310});
console.log(mergeObj.age) 

