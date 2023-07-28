// Default Parameters -> default parameters are used while writing function if you do not want to use variable value

function sum(a,b=3){ //always use the default para at end not in start
    return a+b;
};
console.log(sum(2)); 
console.log(sum(2,4)); 

