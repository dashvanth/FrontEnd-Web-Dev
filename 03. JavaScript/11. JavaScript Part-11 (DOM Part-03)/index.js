// Event Bubbling ->it happens when nesting of elements where event listeners will affect child parent also


let div=document.querySelector('div');
let ul=document.querySelector('ul');
let lis=document.querySelectorAll('li');

div.addEventListener('click', function(event){
    event.stopPropagation();
    console.log('div was clicked');
})

ul.addEventListener('click', function(event){
    event.stopPropagation();
    console.log('ul was clicked');
})

for(li of lis){
    li.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('li was clicked');
    })
}

// stopPropagation->used to stop the event Bubbling  
