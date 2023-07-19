// Loops with arrays
let fruits=["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}

// run in reverse order 
for (let i=fruits.length-1;i>=0;i--){
    console.log(i, fruits[i]);
}


// Nested Loops with Nested Arrays 

let heroes=[ ["ironman","spiderman","hulk"], ["superman","batman","flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`List :${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}


let students=[ ["dashvanth", 98], ["ananya",95], ["suguna", 90] ];
for(let i=0;i<students.length;i++){
    console.log(`info of student #${i}`);
        for(let j=0;j<students[i].length;j++){
            console.log(students[i][j]);
        }
}


// for of loops 
for (hannu of fruits){
    console.log(hannu);
}

let Name="dashvanth";
for(characters of Name){
    console.log(characters);
}


// Nested for of loops 
for (list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}