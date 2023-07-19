// While Loop 
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=2;
while(j<=20){
    console.log(j);
    j+=2;
}


// Favourite Movie 

let favMovie="jabwemet";
let guess=prompt("Guess the movie!");
    while(guess!=favMovie){
        if(guess=="quit"){
            console.log("you quit");
            break;
        }
        guess=prompt("Wrong guess. Please try again!");
    }

if(guess===favMovie){
    console.log(`congrats! You guessed it right. \nFav Movie is: ${guess} `)
}

// Break Keyword 

let k=1;
while(k<=5){
    if(k===3){
        break;
    }
    console.log(k);
    k++;
}
console.log("you used break on 3");