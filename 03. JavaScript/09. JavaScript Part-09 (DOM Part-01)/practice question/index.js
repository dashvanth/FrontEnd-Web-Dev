//  practcie question video->question 1 

let p=document.createElement('p');

 p.innerHTML="Hey! i'm red";
 
 let body=document.querySelector('body');
 body.append(p);

 p.classList.add('red');

//  question 2 
 let h3=document.createElement('h3');
 h3.innerHTML="I'm a blue h3";

 body.append(h3);
 h3.classList.add('blue');

//  question 3 
 let div=document.createElement('div');
 body.append(div);
 div.classList.add('div');

//  sub question 1 
 let h1=document.createElement('h1');
 h1.innerHTML="I'm in a div";

 div.appendChild(h1);

// sub question 2 
let p1=document.createElement('p');
p1.innerHTML="<b>MEE TOO!</b>";

div.appendChild(p1);


// practice Question pdf 
// question 1 
// let body=document.querySelector('body');

let input=document.createElement('input');
input.type='text';
input.name="test";
body.append(input);

let btn=document.createElement('button');
btn.innerHTML="Click me"
body.append(btn);


// question 2 
// input.placeholder="username";

btn.setAttribute('id','btn');
input.setAttribute('placeholder','username');

// question 3 
document.querySelector('#btn').style.color="white";
document.querySelector('#btn').style.backgroundColor="blue";

// question 4 
let h1=document.createElement('h1');
body.append(h1);
h1.innerHTML="<u>DOM Practice</u>";
h1.style.color="purple";

// question 5 
let p=document.createElement('p');
body.append(p);
p.innerHTML="Apna College <b>Delta</b> Practice";