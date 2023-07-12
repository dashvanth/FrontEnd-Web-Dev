// Conditional Statements 
// if statement 
let personAge=18;
if(personAge>=18){
    console.log("Elgible to vote");
}

// if else statement
if(personAge>18){
    console.log("eligible to vote");
}else{
    console.log("1 More year to go!");
}

// Practice Question 
// Create a traffic light using conditional statements
const red='stop', yellow='get ready', green='go';
let signal=red;
if(signal===red){
    console.log(`The signal is: ${red}`);
}else if(signal===yellow){
    console.log(`The signal is: ${orange}`);
}else{
    console.log(`The signal is: ${green}`);
}

// Grade System (if else if statement)
console.log("Grade System using if else")
let marks=30;
if(marks>=80){
    console.log('A+');
} else if(marks>=60){
    console.log('A');
} else if(marks>=50){
    console.log('B');
} else{
    console.log('C');
}


// Practice Questions 
// PopCorn System 
console.log("PopCorn Systen");
let xl=250, l=200, m=150, s=50;
let size=s;
if(size===xl){
    console.log(`The popcorn price is: ${xl}`);
}else if(size===l){
    console.log(`The popcorn price is: ${l}`);
}else if(size===m){
    console.log(`The popcorn price is: ${m}`);
}else{
    console.log(`The popcorn price is: ${s}`);
}

// nest if else statement 
console.log("Nested If Else Statement");
let Marks=81;
if(Marks>=33){
    console.log("Pass");
    if(Marks>=80){
        console.log("Grade: O");
    }else{
        console.log("Grade: A");
    }
} else{
    console.log("Better Luck Next Time!");
}



// Switch Statement 
let month=7;
switch(month){
    case 1: console.log("January"); break;
    case 2: console.log("Febraury"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    
    default: console.log("Enter a valid month.");
}

// Practice Question 
// Week day 
console.log("Days")
let day=4;
switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    
    default: console.log("Not a valid input.");
}
