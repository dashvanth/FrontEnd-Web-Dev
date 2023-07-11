// Operations in js 
let a=10, b=20;
// add 
console.log(a+b);

//sub
console.log(a-b);

// multiply 
console.log(a*b);

// divide 
console.log(a/b);

//remainder
console.log(a%b);

// 2. Nan->Not a Number
console.log(0/0);
console.log(typeof (0/0));

// Operator Precedence
/* BODMAS RULE(brack open,divide,multiply,add,subtract)
()
/
**
*,/,%
+,-
        */
console.log((5+2)/7+1*2);

console.log('operator precedence questions');
console.log((2+1)*3);
console.log(4/5*2**2);
console.log(4+5*2-1/4);


//1. Assignment Operators

let age=23;

// age=age+2;
// age-=/2
// age*=2
// age/=2
// age%=2;
age+=2;
console.log(age);

// Unary Operators 
// increment : pre-increment & post increment => ++a, a++; age+=1
// Decrement : pre-decrement & post decrement => --a, a==;
let number=1;
number++;
console.log(number);
--number;
console.log(number);
