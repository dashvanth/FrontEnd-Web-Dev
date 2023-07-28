// Spread -> expands an iterables into multiple values 
let nos=[1,2,3,1,2,2,1,3,2,0,0,1,2,1,3];
console.log(Math.min(...nos));
console.log(Math.max(...nos));
console.log(...nos);
console.log(..."dashvanth");

// Spread with array iterals 
let spreadArr=[12,4,6,8];
let copyArr=[...spreadArr]; //makes copy of an array (even the address and everything)
console.log(copyArr);

let spreadString=[..."dashvanth"];
console.log(spreadString);


let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let oddEven=[...odd, ...even];
console.log(oddEven);


// Spread with Object literals 
let userInfo={
    email:"sheldoncooper@gmail.com",
    password:1011
};
let infoCopy={ ...userInfo, id:"sheldon", country:"india"};//copied obj and assigned new key&pair
console.log(infoCopy);


// adding array eles into object -> spread 
let numb=[1,2,3,4];
let obj={...numb}; //index will be key and values will be pairs
console.log(obj);
let obj2={..."ananya"};
console.log(obj2);

