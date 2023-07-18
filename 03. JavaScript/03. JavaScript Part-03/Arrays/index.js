// Arrays ->Linear collection of things 
// wrong way to store multiple things 
/*let student1="dashvanth";
let student2="ananya";
let student3="chikkaraju";*/

// right way 
let students=["dashvanth","ananya","Chikkaraju"];
console.log(students[0]);

let nums=[2,4,6,8];
console.log(nums[0], nums[2]);
console.log(typeof nums);
// in javascript arrays are objects

// creating arrays in different ways
// we can store different value in arrays 
let info=["dashvanth", 22, 8.9];
console.log(info[0], info[2], info.length);
// array chaining 
console.log(info[0][0]);
let arr=[];
console.log(arr);


// Arrays are mutable(can change the original value)
let fruits=["mango", "apple", "papaya"];
console.log("before chaing the values:", fruits);
fruits[0]="pineapple";
console.log("after chaing the values:", fruits);

fruits[10]="grapes";
console.log(fruits);