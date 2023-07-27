// Functions 

function hello(){
    console.log("hello");
}
hello();

function printName(){
    console.log("dashvanth");
}

printName();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=19;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("not adult");
    }
}
isAdult();


// Practice question->create a function to print a poem

function poem(){
    console.log("Twinkle Twinkle Little Star \nHow i wonder what you are..!");
}
poem();


// practice question->Create a function that always displays the number between 1 to 6
function dice(){
    let rollDice=Math.floor(Math.random()*6)+1;
    console.log(rollDice);
}
dice();