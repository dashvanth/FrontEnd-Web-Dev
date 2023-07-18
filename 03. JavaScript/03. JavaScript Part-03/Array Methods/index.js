// Array methods 

// 1. push()->inserts in end 2. pop()->delete from end and returns it. 3. unshift()-> inserts in start. 4. shift()-> delete from start and returns it.

let cars=["audi", "BMW", "volvo", "maruthi"];
cars.push("toyota");
console.log("push method", cars);

cars.pop();
console.log("pop method", cars)

cars.unshift("XUV");
console.log("usnift method", cars);

cars.shift();
console.log("shift method", cars);

// Practice Questions array methods 

let month=['january', 'july', 'march', 'august'];
month.shift();
month.shift();
console.log('After shifting two elements:', month); // expected output: ['march', 'august']
month.unshift('june');
month.unshift('july');
console.log('after adding element at index zero:', month);//expected output :['july','june', 'march', 'august'];


// Array methods to find 
// 1. indexOf
let color=["red", "yellow", "green"];
console.log(color.indexOf("yellow"));
console.log(color.includes("yellow"));


// Array methods concatenation and reverse
// 1. concat 
let feelGoodMovies=["forrestgump", "goodwillhunting", "thepursuitofhappyness"];
let feelBadMovies=["batman", "avengersendgame", "fightclub"];
console.log(feelGoodMovies.concat(feelBadMovies));

// 2. reverse()
console.log(feelGoodMovies.reverse());

// 3. slice -> copies a portion of an array
console.log(feelGoodMovies.slice());
console.log(feelGoodMovies.slice(2));
console.log(feelGoodMovies.slice(0,2));
console.log(feelGoodMovies.slice(-2));


// 4. splice()-> used to remove/replace/add eles in place
// splice(start, deleteCount, item0,itemN);

let district=["mysuru", "bengaluru", "ramanagara", "tumkuru", "mandya", "chitradurga"];
console.log("Before applying splice method", district);
console.log(district.splice(5));

// 4. Sort method 
let webSeries=["tbbt", "friends", "breakingbad", "strangerthings", "umbrellaacademy"];
console.log("Before sorting", webSeries);
console.log("After sorting", webSeries.sort());

// the sort method doesn't work on numbers 
let number=[99,34,45,35,100];
console.log(number.sort());//it gives some random order

// Practice Question 
// 1. months
let monthh=["january","july","march","august"];
console.log(monthh.splice(0,2,"july","june"));

// 2. reverse index
let languages=["c","c++","html","javascript","python","java","c#","sql"];
console.log(languages.indexOf("javascript"));
console.log(languages.reverse().indexOf("javascript"));

// array References->when an arrays is created it creates a memory block and its values holds different address.
let one=[1];
let one1=[1];
console.log([1]===[1]); //false  because there address is different

let array=["1","2","3","4"];
let arrayCopy=array;
console.log(array===arrayCopy); //true because the arraycopy is pointing out to the same address as array variable(if we change the value in any1 it changes in both);
//this creates only reference not copy so both are pointing same memory location and any change will reflect
arrayCopy.push("5","6","7","8")
console.log(array);


// Constant Arrays 
// when we declare const array we can change the values of the arrays using array methods but cannot change its complete address because it is assigned as constant 
const constArray=[1,2,3,4];
console.log(constArray.push(5));
// constArray=[1,2,3,4]; this is show error because it can't be assingned again


// Nested Arrays -> addint an array inside an array
let evenNo=[[2,4],[6,8],[10,12]];
console.log(evenNo);
console.log(evenNo[0].length);
console.log(evenNo[0][0]);
console.log(evenNo[0][1]);
console.log(evenNo[1][0]);
console.log(evenNo[2][1]);


// Practice Question (Tic tac toe game)
const ticTacToe=[ ['X',null,'0'],[null,'X',null],['0',null,'X'] ];
console.log(ticTacToe);
ticTacToe[0].splice(1,1,'0');
console.log(ticTacToe);