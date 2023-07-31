// Form Events-> events are used for form 

/*
let form=document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    // alert("form is submitted");

    // console.dir(form.elements[0].value); we can do like this also
    // console.dir(form.elements[1].value);

        let user=this.elements[0] //same as form.elements[0]
        let pass=this.elements[1] //same as form.elements[0]

        // alternate method without using querySelector 

//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
    // console.dir(user);
        console.dir(user.value);
        console.dir(pass.value);

        alert(`Hi ${user.value}, your password is set to: ${pass.value}`)
})
*/
// preventDefault->used to prevent the page from default settings


// Extracting form Data ->how to extract the data/details from the form.
// value->innerText is not used to extract the text entered in input. value property is used. 


// More Events->1.Change events, 2. input events 

// 1.change event->it tracks the initial value to final value and gives the final value that has been changed 

let form=document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
});

let user=document.querySelector('#user');

user.addEventListener('change', function(){
    console.log('change event');
    console.log('final value:', this.value);
})

// input event -> similar to change but it tracks individual keys not final value 
// let pass=document.querySelector('#pass');

// pass.addEventListener('input', function(event){
//     console.log('input changed');
//     console.log('key= ', this.value);
// })

user.addEventListener('input', function(){
    console.log('input event');
    console.log('final value:', this.value);
})
