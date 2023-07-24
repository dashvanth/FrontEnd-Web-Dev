// Guessing game 
const max=prompt("Enter the max number");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");
while(true){
    if(guess=='quit'){
        console.log("user choose to quit");
        break;
    }
    if(guess==random){
        console.log(`Your guess was right. The number was ${random}`);
        break;
    } else if(guess<random){
        guess=prompt("hint: your guess is too small. please try again!");
    } else{
        guess=prompt("your guess is too large. please try again!");
    }
}   