// Higher Order Function->used to pass the function arguments in another function
function mulGreet(func, count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greeet=function(){
    console.log("hello")
}

mulGreet(greeet,3);


// Higher order Function returns ->the functions which returns the functions is called higher order function 


function oddOrevenFactory(request){
    if(request==="odd"){
        return function(n){
            console.log(!(n%2===0));
        }
    }else if(request==="even"){
        return function(n){
            console.log((n%2===0));
        }
    }else{
        console.log("wrong request");
    }
}

let request="odd";

oddOrevenFactory(request);