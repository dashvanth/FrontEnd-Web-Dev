// Assignment Questions 
// Question 1->try out these events:1. mouseout, 2.Keypress, Scroll, load
// 1.mouseout-> it shows that when mouse is out of the element 
// let btn=document.querySelector('button');
// btn.addEventListener('mouseout', function(){
//     console.log('Mouse is out');
// })

// 2. keypress->it shows that key is pressed 
let inp=document.querySelector('input');
inp.addEventListener('keypress', function(){
    console.log("key is pressed");
})

// 3. Scroll->it shows how many times you've scrolled 
let body=document.querySelector('body');
body.addEventListener('Scroll', function(){
    console.log("scroll is happened");
})

// 4.load->it is fired when the page is loaded or a particular element is loaded 
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });


// Question 2 
let btn=document.createElement('button');
btn.innerHTML="Know More!";

  
document.querySelector('body').append(btn);
btn.addEventListener('click', function(){
    this.style.backgroundColor="green";
})
