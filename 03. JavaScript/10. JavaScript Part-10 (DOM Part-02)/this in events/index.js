// this keyword in addEventListener ->when this is used in a callback of a event handler. it refers to that something

let newBtn=document.querySelector('.newbtn');
newBtn.addEventListener('click', function(){
    console.log(this);
    console.log(this.innerText='click me');
    // this.style.backgroundColor="blue";
})
// this -> it is used when we work on multiple type of objects 


function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}
let para=document.querySelector('.para');
let h2=document.querySelector('h2');
let h3=document.querySelector('h3');


para.addEventListener('click', changeColor);
h2.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
/*
para.addEventListener('click', function(){
    console.log(this);
    console.log(this.innerText='click me');
    this.style.backgroundColor="blue";
})

h2.addEventListener('click', function(){
    console.log(this);
    console.log(this.innerText='click me');
    // this.style.backgroundColor="blue";
})

h3.addEventListener('click', function(){
    console.log(this);
    console.log(this.innerText='click me');
    // this.style.backgroundColor="blue";
})
*/

// writing the code repeatedly is not good in programming 
