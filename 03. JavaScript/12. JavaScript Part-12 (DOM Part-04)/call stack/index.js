// Call Stack 

function hello(){
    console.log("inside hello function");
    console.log("hello");
}

function demo(){
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();
console.log("done! bye.");


// visualising the call stack 

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();


// breakPoints -> shows in source/debugger window how function call stack works or how debugging works. we can add break points to know the how certain code works.
