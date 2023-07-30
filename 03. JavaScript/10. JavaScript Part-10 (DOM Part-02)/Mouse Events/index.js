// DOM Events 
// events are signals that something has occured. (user inputs/actions)

// Mouse Pointer Events 
// onclick ->when an element is clicked

// selecting all the buttons and giving alert
let btns=document.querySelectorAll('button');
// console.dir(btns);

for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onmouseenter=function(){
    //     console.log('button was entered');
    // };

    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
    btn.addEventListener('dblclick', function(){
        console.log('you clicked twice!');
    })
}

function sayHello(){
    alert('hello there!');
    // console.dir(btns); 
}

function sayName(){
    alert('dashvanth');
}
// btn.onclick=function(){
//     console.log('button was clicked');
// }


// onmouseenter ->


// Event listener ->addEventListener 
// used to add multiple events to a objct and much more uses 



// Event Listeners for elements for elements 
// let p=document.querySelector('p');
// p.addEventListener('click', function(){
//     p.innerHTML='Hello Sheldon! I am leonard';
// })

// let div=document.querySelector('div');
// div.className='box';
// div.innerHTML="<b>This is a div</b>";

// div.addEventListener('click', function(){
//     div.style.backgroundColor='red';
// })

// let box=document.querySelector('.box');
// box.addEventListener('mouseenter', function(){
//     console.log('mouse inside the box');
// })

