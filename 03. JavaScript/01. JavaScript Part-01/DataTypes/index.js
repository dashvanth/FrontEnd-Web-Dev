//Datatypes

let first=25;
console.log(typeof first);


// 1. Numbers
let number=6;
console.log(typeof number);
let price=599.99;
console.log(typeof price);




// 3. Boolean 
let age=13;
let isAdult=true;
console.log(isAdult>=age);
// we can change the variabe to any datatype in javascript
let naam='dashvanth';
naam=50;
console.log(typeof naam);

// 4. String 
let firstName='Dashvanth';
let lastName='Raj';
console.log(typeof firstName);
console.log(typeof lastName);
let fullName=firstName+lastName;
console.log(fullName);

let empty='';
console.log(empty);

//string indices
// every letter gets a memory location when we declare a String. (it starts with 0 index
let avenger="TONY STARK";
console.log(avenger[0]);
console.log(avenger[5]);

// length of a string 
console.log(avenger.length);

console.log(avenger[avenger.length]);
console.log(typeof avenger.length);

// Concatenation of strings 
let avengerRealName="Robert Downey JR"
let concatAvenger=avenger+" "+ avengerRealName;
console.log(concatAvenger);


// 5. Undefined 
let aa;
console.log(aa);
// The value which is declared and value is not assinged is undefined 

// 6. Null
// The value which we declare as a null is a null 
let bb=null;
console.log(bb);