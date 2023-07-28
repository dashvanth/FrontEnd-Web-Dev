// Destructuring ->storing values of arrays into multiple variables

let names=["sheldon", "leonard", "raj", "howard", "penny", "amy", "bernadette"];

/*let winner=names[0];
let runnerup=names[1];
let secondRunnerUp=names[2];*/

// this can be done through destructuring 
// they are stored as variables not arrays 
let [winner, runnerup, ...others]=names;
// console.log(winner, runnerup, others);


// Destructuring with Objects 

let resume={
    name:"dashvanth",
    phone:9686821991,
    email:"dashvanthrajhc@gmail.com",
    skills:["html", "css", "js", "c", "java(basics)"],
    projects:["Portfolio", "discord-clone", "flickr-clone"],
    experience:{
        designer:["@darshidigital"], 
        intern:["front-end@AsteriscTechnoCrat"]
    }
};

/*let user=resume.name;
let userPhone=resume.phone;
let userEx=resume.experience.designer; wrong way */

// let {name, phone, skills}=resume;
// if you want to store the values in another variables, here's the method 
let{name: user, phone: userPhone, experience: userEx, city="bengaluru"}=resume;
console.log(user, userPhone, userEx, city);

