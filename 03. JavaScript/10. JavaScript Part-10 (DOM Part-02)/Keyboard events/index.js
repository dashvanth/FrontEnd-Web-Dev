let btn=document.querySelector('button');

// there is a default event argument function when we declare addEventListener. that is used for keyboardEvents it contains a pointerEvent 
// btn.addEventListener('click', function(event){
//     console.log(event);
//     console.log('button clicked');
// })

// btn.addEventListener('dbl click', function(event){
//     console.log(event);
//     console.log('button clicked');
// })

// let input=document.querySelector('input');

// input.addEventListener('keydown', function(event){
//     console.log("event=",event);
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     // console.log('key was pressed');
// })

// input.addEventListener('keyup', function(){
//     console.log('key was released');
// })

// KeyboardEvent-> two imp properties->1.code(returns the code/name of the key) and 2.Key(tells which key is visible)

// move a Character game 
let input=document.querySelector('input');

input.addEventListener('keydown', function(event){
    console.log("key=",event.code);
    // if(event.code=='ArrowUp'){
    //     console.log("character moves forward!");
    // }else if(event.code=='ArrowDown'){
    //     console.log("character moves backward!");
    // }else if(event.code=='ArrowLeft'){
    //     console.log('character moves left!');
    // }else{
    //     console.log('character moves right!')
    // }

    if(event.code=='KeyU'){
        console.log("character moves up!");
    }else if(event.code=='KeyD'){
        console.log("character moves down!");
    }else if(event.code=='KeyL'){
        console.log('character moves left!');
    }else if(event.code=='KeyR'){
        console.log('character moves right!')
    }
})