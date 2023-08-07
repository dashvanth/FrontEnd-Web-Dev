

// JS Single Threaded -> js is single threaded lang where at at one time only one code will execute 

let a = 25;
console.log(a);
let b = 5;
console.log(b);
console.log(a + b);

// SynchronousCode/Nature-> the single line of code like the above code 



setTimeout(function(){
    console.log("hello world");
}, 2000)
setTimeout(()=>{
    console.log("apna college")
}, 2000);
console.log("hello");


// AsynchronousCode/Nature->the setTimeout,and other will work as asynchronous in js

// browser helps to execute multiple tasks as they are written in multiThreaded languages like c++,java etc...


// Asynchronous nature problems 

// callback hell -> due to js async nature callback hell appears

let h1 = document.querySelector('h1');


function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color; 
            resolve("color changed");
        },delay)
    })
}

colorChange("red", 1000)
.then(()=>{
    console.log("red color was completed");
    return colorChange("green",1000)
})
.then(()=>{
    console.log("green color was completed");
    return colorChange("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return colorChange("yellow",1000)
})
.then(()=>{
    console.log("yellow color was completed");
})
.catch(()=>{
    console.log("The color is not changed");
})
// colorChange("red", 1000, ()=>{
//     colorChange("orange", 1000, ()=>{
//         colorChange("green", 1000, ()=>{
//             colorChange("pink", 1000, ()=>{
//                 colorChange("blue", 1000)
//             })
//         })
//     });
// });

// callbacks nesting -> callback hell 


setTimeout(()=>{
    h1.style.color = "green"; 
},1000)
 
setTimeout(()=>{
    h1.style.color = "red"; 
},2000)

setTimeout(()=>{
    h1.style.color = "orange"; 
},3000)


// callback hell-> we use promises,async,await keywords to get out of callback hell  
// 1. promises 2. async 3. await 


