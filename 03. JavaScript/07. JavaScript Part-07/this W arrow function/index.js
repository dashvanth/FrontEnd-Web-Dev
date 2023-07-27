// this keyword ->used to access the objects keys values when a method is used in a object. 
let student={
    name:"dashvanth",
    age:22,
    math:90,
    phy:92,
    cs:98,
    chem:80,
    getavg(){
        console.log(this);
        let avg=((this.phy+this.math+this.cs)/3);
        console.log(avg);
        console.log(`${this.name}'s average is: ${avg}`);
    }
    
};

function getAvg(){
    console.log(this);
}


// Try and Catch block 
/*console.log("hello");
console.log("hello");
// console.log(a);// the next line will not be executed because of error
console.log("hello");
console.log("hello");
console.log("hello"); */

// so we use try block to check if there is any error and catch block will tell if there is any error 
// ex: 
// console.log("hello");
/*try{
    console.log(a);
}catch(err){
    console.log("may be a is not defined");
    console.log(err);
}*/
// console.log("there");



// Arrow Functions -> used to reduce the function lines and used in high order function 
const sum=(a,b) =>{
    console.log(a+b);
}
// sum(10,20);

let cube=n=>{  //if we have one line execution then no need of ()braces 
    return n*n*n;
}

let pow=(a,b)=> {
    return a**b;
}

// Arrow functions implicit return 
let func=(a,b)=>a*b;


// SetTimout ->used to set the time to the block of code which will execute after some time given [ Syntax: setTimeout(function,timeout)]
// mostly used for API calls 
console.log("hello");
setTimeout(() => {
    // console.log("how are you doing?")
}, 4000);
console.log("there!");


// Set interval -> it works as a loop. like it will stop for 4s then execute again, stops and execute again. 
// syntax: setInterval(function, timeout);

let id=setInterval(() => {
    console.log("The Big Bang Theory!")
}, 2);

clearInterval(id);

// clearInterval -> used to stop the setinterval loop [ Syntex: clearInterval(variable name);]


// this keyword with arrow functions 
// this keyword works differently with normal function and arrow function 
let stu={
    name:"dashvnath",
    marks:90,
    age:22,
    prop:this,//global scope
    getName: function(){
        console.log(this);// current object scope
        return this.name;
    },
    getMarks:()=>{
        console.log(this);//parent scope(window);
        return this.marks;
    }, 
    getInfo1:function(){
        setTimeout(() => {
            console.log(this);//stu
        }, 2000);
    }, 
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);//window
        }, 2000);
    }
}


// practice question ->write an arrow function that writtens the sq of number n
let square=n=>n*n;
console.log(square(5));

// 2. write a function that prints "hello world" in intervals of 2s ;
let iD= setInterval(() => {
    console.log("hello world");
 }, 2000);

 setTimeout(() => {
    clearInterval(iD);
    console.log("clear interval succeed")
 }, 10000);