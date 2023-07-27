// Methods ->The functions which are declred inside a object is called as methods.
let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
    return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
console.log(calculator.add(10,20));


// methods (Shorthand)
let calc={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};
console.log(calc.add(2,4));