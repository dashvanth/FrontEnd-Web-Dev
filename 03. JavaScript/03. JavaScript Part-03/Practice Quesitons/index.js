// question 01
// write a js program to get first n elements of an array 
// let arr=[7,9,0,-2];
// let n=3;
// let ans=arr.slice(0,n);
// console.log(ans);

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(arr.length-n);
console.log(ans);


// 3. check whether string blank or not
// let str=prompt("enter a string");
// if(str.length===0){
//     console.log("blank string");
// }else{
//     console.log("not a blank ");
// }

// 4. check whether string is lowercase 
let str="dasHVANTH";
let idx=3;
if(str[idx]==str[idx].toLowerCase()){
    console.log("it is a lowecase");
}else{
    console.log("It is a uppercase");
}

// 5. remove black spaces from a string 
let string=prompt("Please enter a string");
console.log(`Original String: ${string}`);
console.log(`String without spaces: ${string.trim()}`);

6. 