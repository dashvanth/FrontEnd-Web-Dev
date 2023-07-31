// Text Editor 

let h1=document.querySelector('h1');
let input=document.querySelector('#text');

input.addEventListener('input', function(){
    console.log(input.value);
    p.innerText=input.value;
})
let p=document.querySelector('p');