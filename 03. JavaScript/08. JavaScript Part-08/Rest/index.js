// Rest ->allows a function to take indefinite no of arguments and bundle them in an array (syntax is same: ...args)
function sum(...args){
    return args.reduce((add,ele)=>add+el);
}

function mini(){
    console.log(arguments);
}