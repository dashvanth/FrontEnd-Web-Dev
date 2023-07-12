// Operators in js 
console.log("Operators in js");
let a=10, b=5;
// Arithmetic Operators
console.log(a+b, a-b, a*b, a/b, a%b, a**b);

// Unary Operators 
console.log(a++, ++b, --a, b--);

// Assignment operators
let num=10, num2=num;
console.log(num2);

// comparision operator
// <,>,<=,>=,==,===,!=
const age=17;
console.log(age>18);
console.log(age<18);


// Logical Operator 
// &&, ||, !
// 1. &&
let weight=50;
if(weight<=60 && weight>=50){
    console.log("You are not Skinny");
}else{
    console.log("Skinny");
}

// 2. ||
if (weight<40 || weight>=45){
    console.log("you can run");
}else{
    console.log("You Can't");
}

// 3. !
console.log(!true);

// Practice Questions (logical operators)
// 1. Good String 
let str="apple";
if(str[0]==='a' && str.length>3){
    console.log("It is a good string");
}else{
    console.log("Not a good String");
}

// 2. safe or unsafe
let numb=12;
if(numb%3===0 && numb+1==15 || numb-1==11){
    console.log("safe");
}else{
    console.log("unsafe");
}

// Truthy & Falsy values 
// 0, null, undefined, "", false etc are falsy and everything this except this are truthy values 
if(""){
    console.log("true value");
}else{
    console.log("false value");
}