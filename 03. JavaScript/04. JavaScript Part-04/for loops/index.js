// Loops -> used to iterate a piece of code

// for loop 
for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=1;i--){
    console.log(i);
}

// print odd numbers 
for(let i=1;i<=20;i+=2){
    console.log(i);
}

console.log("backwards");
for(let i=19;i>=1;i-=2){
    console.log(i);
}


// print even numbers 
for(let i=2;i<=10;i+=2){
    console.log(i);
}
console.log("backwards");
for(let i=10;i>=2;i-=2){
    console.log(i);
}

// infinite loops
for(let i=1;i>=0;i--){
    console.log(i);
}

// multiplication table 
let mulTable=5;
for(let i=1;i<=10;i++){
    console.log(mulTable," X ",i, " = ", mulTable*i);
}
let table = prompt("Enter a table no:");
table = parseInt(table); // Convert the user input to an integer

for (let i = 1; i <= 10; i++) {
  console.log(table * i);
}


// Nested Loops ->loop inside a loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`)
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}