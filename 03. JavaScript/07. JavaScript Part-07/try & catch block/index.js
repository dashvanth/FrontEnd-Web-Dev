// Try and Catch block 
console.log("hello");
console.log("hello");
// console.log(a);// the next line will not be executed because of error
console.log("hello");
console.log("hello");
console.log("hello"); 

// so we use try block to check if there is any error and catch block will tell if there is any error 
// ex: 
// console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("may be a is not defined");
    console.log(err);
}
// console.log("there");