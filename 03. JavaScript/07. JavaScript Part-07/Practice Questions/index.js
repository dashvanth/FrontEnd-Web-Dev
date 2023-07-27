// write a arrow function that accept array no and return avg of those numbers 
const arraAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total +=number;
    }
    return total/arr.length;
};

let arr=[1,2,3,4,5,6];
console.log(arraAverage(arr));


// Question 2 
const evenOrOdd=(n)=>n%2===0;


// 3. Question 3
const object={
    message:"Hello, World!", 
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 4000);


// Question 5 
let length =4;
function callback(){
    console.log(this.length);
};

const obj ={
    length:5,
    method(callback){
        callback();
    },
};

obj.method(callback,1,2);