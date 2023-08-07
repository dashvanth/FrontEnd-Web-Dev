
// Promises ->the promise obj represents the eventual completion (or failure) of asynchronous operations and its resulting value


// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if( internetSpeed > 4 ){
//         success();
//     } else{
//         failure();
//     }
// }


savetoDB("apna college", ()=>{
    console.log("success: your data was saved: ");
    savetoDB("hello world", ()=>{
        console.log("success: 2nd data was saved");
        savetoDB("Dashvanth", ()=>{
            console.log("success3: 3rd data was saved");
        }, ()=>{
            console.log("failure3: weak connection. 3rd data not saved.");
        })
    }, ()=>{
        console.log("failure: 2nd data was not saved");
    })
}, ()=>{
    console.log("failure: weak connection. data not saved.");
})


// Refactoring with promises 

//  Promise -> resolve , reject 
//  states: fullfilled or rejected , pending  in promise

function savetoDB(data){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        } else{
            reject("failure: weak connection. data not saved");
        }
    })
}

// methods in promises -> 
//  then() and catch() 

// let request = savetoDB("apna college"); //request = promise object
//     request
//     .then(()=>{
//         console.log("succes: request is resolved.");
//         console.log(request);
//     })
//     .catch(()=>{
//         console.log("failure: request is rejected.");
//         console.log(request);
//     })

// compact version 
// savetoDB("apna college")
//     .then(()=>{
//         console.log("success: request is resolved.");
//     })
//     .catch(()=>{
//         console.log("failure: request is rejected.");
//     })


// Promise chaining -> using multiple .then and catch is called promise chaining

savetoDB("apna college")
    .then((result)=>{
        console.log("data1 saved. request is resolved. ");
        console.log("result of promise: ",result);
        return savetoDB("hello world")
    })
    .then((result)=>{
        console.log("data2 saved");
        console.log("result of promise: ",result);
        return savetoDB("dashvanth");
    })
    .then((result)=>{
        console.log("data3 saved");
        console.log("result of promise: ",result);
    })
    .catch((error)=>{
        console.log(" data not saved. promise was rejected.");
        console.log("result of error: ",error);
    })

