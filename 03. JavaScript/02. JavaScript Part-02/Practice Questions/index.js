// Practice Questions PDF 
let num=45;
if(num%10==0){
    console.log("good");
} else{
    console.log("bad");
}

// practice Question 2 
let user=prompt(`Enter the username`);
let age=prompt(`Enter the age`);
alert(`${user} is ${age} years old.`);

// practice Question 3
let quarterMonths=3;
switch(quarterMonths){
    case 1: console.log("January, February, March"); break;
    case 2: console.log("April, May, June"); break;
    case 3: console.log("July, August, September"); break;
    case 4: console.log("October, November, December"); break;
    
    default: console.log("Enter a valid number!");
}

// Practice Questions 4 
let str='Amanda';
if((str[0]==='A' || str[0]==='a') && (str.length>5)){
    console.log("golden");
} else{
    console.log("not golden");
}

// practice question 5 
let a=10, b=20, c=30;
if(a>b && a>c){
    console.log("a is greater:", a);
} else if(b>c){
    console.log("b is greater:", b);
} else{
    console.log("c is greater:", c);
}

// practice question 6 
let num1=435353543532;
let num2 = 47853;
if( (num1%10) == (num2%10)) {
console.log("numbers have the same last digit which is",
num1%10);
} else {
console.log("numbers don't have the same last digit");
}