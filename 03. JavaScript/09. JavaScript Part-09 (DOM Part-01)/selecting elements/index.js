console.dir(document.querySelector("div a"))

// DOM ->Document Object Model
// the DOM represents a document with a logical tree 
//it allows us to manipulate/ change webpage content(html elements);


// window is a Object, document is Object which contains other objects inside in it. we use document object two make changes in content of the webpage
// DOM is basically a tree which has parent child relationship where document stands at the top all 

// accesing h1 element and changing the text 

console.dir(document.all[8].innerText="Pater Parker");

// 2 process of working
// 1. selecting 
// 2. change/manipulation

// 1. selecting elements 


// getElementById->selecting by html id. returns the element as object or null if element not found

console.dir(document.getElementById("main-heading").innerText="Peter Parker");


// changing the src of the img by selecting id (if you want object of any ele use console.dir)
let imgObj=document.getElementById("mainImg");
imgObj.src="Assets/Man.png";



// 2. getElementByClassName->selecting by html class. return the elements as an HTML Collection or empty collectin (if not found)

let smallImg=document.getElementsByClassName("oldImg");

for(let i=0;i<smallImg.length;i++){
    smallImg[i].src="Assets/Spider_Man.png";
    console.dir(`value of img no. ${i} is changed`);
}


// 3. getElementsByTagName->selecting ele using EventTarget(p,h1,img). returns the eles as an html collection or empty collection (if not found)

let para2=document.getElementsByTagName("p")[1].innerText="abc" ;
console.log(para2)



// QuerySelectors ->allow us to use any css selector (frequently used); we can select them by tag,class,id
// 'p'->select the first Element.
// "p"-> select all the elements 


// selecting single text 

console.dir(document.querySelector('h1')); //tag selector
console.dir(document.querySelector('#main-heading'));  //id selector 
console.dir(document.querySelector('.oldImg')); // class selector 

document.querySelector('h1').innerText="hey peter"; 


// quesrySelectorAll->used to select all class,id,tags 
console.dir(document.querySelectorAll('p'));
