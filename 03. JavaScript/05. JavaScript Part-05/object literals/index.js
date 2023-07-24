// JavaScript Part 05 

// Object literals -> used to store keyed collections and complex entities

const student={
    Name: "dashvanth",
    age: 22,
    marks: 90.4
};

// diff bw objects and arrays-> we can store key and values that gives lot of clarity of what we are storing but in arrays we only store values. 
// here's an example 
// let stu=["dashvant", 22, 90.4];

// we can store arrays in objects 
const item={
    price:100.99,
    discount:50, 
    color:["white","orange"]
};


// Practice Question 1-> create a thread for a twitter post using object literals.

const post={
    username:"@dashvanth",
    content:"The new Threads app is overtaking the twitter with its some additional features.",
    likes: 249,
    dislikes:30, 
    reposts:4,
    tags:["@ananya", "priya", "suguna"]
};

// Accessing objects 
console.log(post.username);
console.log(post.tags[0]);

// Conversion in Get Values ->JS automatically converts the values when it is written inside [] even if they are numbers. Ex:

let obj={
    1:'a',
    2:'b',
    null:'c',
    undefined:'d',
    true:'e'
};
console.log(obj[1]); //this is not index value, it is a string 
console.log(obj[null]);


// Add/Update the object key values 
const stu={
    Name:"dashvanth",
    age:22,
    marks:90.4,
    city:"Ramanagara"
};

console.log(stu.city="bengaluru");
console.log(stu.gender="male");
console.log(stu.marks="A");
console.log(stu);

// delete keyword is used to delete the key and value of object 
delete stu.gender;
console.log(stu);

