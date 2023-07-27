// Function Expressions ->storing a function inside a variable (a nameless function)

let sumOf=function(a,b){
    return a+b;
}
console.log(sumOf(2,4));

let message=function(){
    console.log("hello");
}
message();

// changing the function experssino variable value 
message=function(){
    console.log("namaste");
}