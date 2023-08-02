let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');

btn.addEventListener('click', function(){
    let item=document.createElement('li');
    let delBtn=document.createElement('button');

    item.innerText=input.value;
    delBtn.innerText="delete";
    delBtn.classList.add('delete');

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";

})

// event Delgation using bubbling 
ul.addEventListener('click', function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        alert(`Task: ${listItem.firstChild.textContent} is deleted.`)
    }
})


// let delBtns=document.querySelectorAll('.delete');
// for(delbtn of delBtns){
//     delbtn.addEventListener('click', function(){
//         let par=this.parentElement;
//         console.log(`Task: ${ul.firstElementChild.innerText}d`);
//         par.remove();
//     })
// }


// Event Delegation 
// whenever we add new btn or element using javascript and if you alread added the same eles in html and added some events to them means the html eles events and js eles ements do not applied together 

// by using bubbling phenomenon we can use event delegation -> adding event to the parent ele so the all events will be applied to child ele (even if ele is created using js);
