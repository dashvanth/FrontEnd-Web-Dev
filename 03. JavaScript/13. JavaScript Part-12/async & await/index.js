// JavaScript part 12 

// async functions -> 1.async 2. await 
// 1. async keyword -> returns a promise

// async function greet(){
//     throw "some random error" //throwing error
//     return "hello world"; //return a promise
// }
// returns a rejected state in promise 


async function greet(){
    return "hello world"; //return a promise
}
// returns a fulfilled state in promise 


greet()
.then(()=>{
    console.log("promise was successful");
})
.catch((err)=>{
    console.log("promise was rejected with error: ", err);
})


// arrow fun async 
// let demo = async ()=>{
//     return 5;
// }


// await keyword -> pauses the execution of surrounding func until the promise is settled(resolved or rejected) 

let h1 = document.querySelector('h1');


function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
                reject("promise rejected");
            }
            h1.style.color = color; 
            console.log("color changed to: ", color)
            resolve("color changed to");
        },delay)
    })
}

// using await 7 async to minimize the code (efficient code)
async function demo(){
    try{
        await colorChange("red", 1000);
        await colorChange("blue", 1000);
        await colorChange("green", 1000);
        await colorChange("orange", 1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number is = ", a+3);
}


// Handling rejections with await keyword 


// colorChange("red", 1000)
// .then(()=>{
//     console.log("red color was completed");
//     return colorChange("green",1000)
// })
// .then(()=>{
//     console.log("green color was completed");
//     return colorChange("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return colorChange("yellow",1000)
// })
// .then(()=>{
//     console.log("yellow color was completed");
// })
// .catch(()=>{
//     console.log("The color is not changed");
// })


function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000)
    })
}

async function returnNum(){
    await getNum();
    await getNum();
    await getNum();
}

// await keyword is used only inside the async fun