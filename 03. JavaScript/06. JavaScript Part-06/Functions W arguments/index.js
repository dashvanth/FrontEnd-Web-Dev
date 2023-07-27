// Functions with arguments 
function personName(name){
    console.log(name);
}
personName("dashvanth");

function personInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
personInfo("dashvanth", 22);


function sumOf2(a,b){
    console.log(a+b);
}
sumOf2(10,2);


// Practice question -> average of 3 numbers 
function avg(a,b,c){
    let average=(a+b+c)/3;
    console.log(average);
}
avg(10,20,30);

// practice Question -> create a function that gives multiplication of a number 
function mul(number){
    for(let i=number;i<=number*10;i+=number){
        // console.log(`${number} X ${i} = ${number*i}`);
        console.log(i);
    }
}
mul(2);

