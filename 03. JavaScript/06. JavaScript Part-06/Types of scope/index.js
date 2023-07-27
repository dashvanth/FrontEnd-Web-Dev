// Scope 1. function 2. block 3. lexical. 4. Globar Scope
// 1. function scope -> variables which are declared inside a function are not accessble or visible outside the function 

let Name="dashvanth"; //globa scope
function printname(){
    let Name="Ananya";
    console.log(Name);
}
// printname();
// console.log(Name); error: name is not defined
// console.log(Name);

// 2. Block Scope ->variables declared inside a block are cannot accessible outside of the block {}
{
    let a=6;
}
// console.log(a); error: a is not defined 
for(let i=1;i<=5;i++){
    // console.log(i);
}
// console.log(i);error: i not defined 



// 3. lexical Scope -> a variable defined in outer func can be accessed inside the innner func but the opposite is not true 
function outerFunc(){
    let x=5;
    let y=7;
    function innerFunc(){
        let a=10;
        console.log(x);
        console.log(y);//this is possible
    }
    innerFunc();
    console.log(a);//this is not possible because outerfunc cannot access innerfunc variable
}

// Hoisting ->

// practice Question -> what'll be the output 
let greet="hello";
function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

console.log(greet);
changeGreet();