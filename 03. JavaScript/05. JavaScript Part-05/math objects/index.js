// Math Objects 
/* Math.abs->gives the absolute value(if the value is minus it gives + value)
Math.pow(a,b)-> gives the power. Ex:Math.pow(2, 4)=16
Math.floor(5.5)->gives nearest,smallest int value. Ex: (5.5)=5, (5.999)=5
Math.ceil(4.5)=>gives the roundof of largest integer value. Ex: (4.5)=5, (4.2)=5, (4.9)=5
Math.random()->generates a random number bw 0 to 1. 
*/


// Practice Question ->generating a random numbers from 1 to 10
/*let num=Math.random();
num=num*10;
num=Math.floor(num)+1;//+1 is to get the number 10
console.log(num);
this can all written in a single line */

let num=Math.floor(Math.random()*10)+1;
console.log(num);

// Practice questions
// genereate random no bw 1 to 100
let random100=Math.floor(Math.random()*100)+1;
console.log(random100);


// generate random no bw 1 t0 5
let random5=Math.random();
random5=random5*5;
random5=Math.floor(random5);
random5=random5+1;
console.log(random5);