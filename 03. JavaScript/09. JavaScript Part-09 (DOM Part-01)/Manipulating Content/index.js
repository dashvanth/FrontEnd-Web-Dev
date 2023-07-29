// Setting content in Objects ->used DOM manipulation 

// I. Using properties and methods -> innerText, innerHTML, textContent 

// 1. innerText ->shows the visible text contain in the node. (shows the text content which displayed in the webpage) 
// 2. innerHTML ->shows the full text(shows all the tags and everything)
// 3. TextContent ->shows the full markup. (shows how the html written in code(vscode))

let para=document.querySelector('p');
para.innerText="Hey, i am peter parker";
para.innerHTML="Hey, i am peter <b>parker</b>";

para.innerHTML=`<u>${para.innerText}</u>`;


// Manipulating Attributes 
// 1. obj.getAttribute('');->used to get the attribute value
// 2. obj.setAttribute('');-> used to set the attribute value

img.getAttribute('id')
img.setAttribute('src', 'Assets/Amazing_spiderman.jpg')


// Manipulating Style 

let links=document.querySelectorAll('.box a');


for(link of links){
    link.style.color="yellow";
}

for(let i=0;i<links.length;i++){
    links[i].style.color="yellow";
    links[i].style.backgroundColor="red";
}

// style property is not used much bcoz it applies on inline css not in external css and lots of properties will be applied to css



// obj.classList-> used to get the class list 
// 1. classList.add->to add new classes,     2. classList.remove->to remove classes,     3. classList.contains->to check if class exists,    4. classList.toggle->to toggle between add & remove 
let img=document.querySelector('img');
img.classList;

let heading=document.querySelector('h1');
heading.classList.add('green');

heading.classList.remove('green');
heading.classList.contains('green'); true
heading.classList.toggle('blue');


let boxx=document.querySelector('.box');
boxx.classList;


// Navigation ->we can move from one ele to another
// 1. parentElement, 2. children, 3,previousElementSibling/nextElementSibling
   heading.parentElement;
    heading.children;
    heading.previousElementSibling;

console.dir(box.children);


// Adding elements-> adding elements to document.
// 1. document.createElement('p') p is added to the document
let newP=document.createElement('p');
newP.innerText="hey MJ! This is peter"
// after creating an ele we need to insert an ele to document that is append 
// appendChild-> used when we want to insert an ele in nesting form 
let bodyy=document.querySelector('body');
bodyy.appendChild(newP);

let boxxx=document.querySelector('.box');
boxxx.appendChild(newP);

let btn=document.createElement('button');
btn.innerText="click me!";

box.appendChild(btn);

// append ->adds a string/text or anything at last
newP.append(" this is new text using append");
newP.append(btn);
newP.append(" do not click this button");
newP.style.color="red";

// prepend -> adds a string/text or anything at first 
newP.prepend(" this is new text using prepend ");
newP.prepend(btn);


// insertAdjacent(where, element)-> can define where we want to insert 

let button=document.createElement('button');
button.innerHTML="NEW BUTTON";
let p=document.querySelector('p');
p.insertAdjacentElement('beforebegin', button);
p.insertAdjacentElement('beforeend', button);
p.insertAdjacentElement('afterbegin', button);
p.insertAdjacentElement('afterend', button)



// Removing elements 
// 1. removeChild(), 2.remove()

let body=document.querySelector('body');

let butn=document.createElement('button');
butn.innerHTML="hello!";
body.append('butn')
butn.insertAdjacentElement('afterbegin',newP)

body.append('butn')