// String Methods 
// methods are used to execute a particular task assigned to them [ ex: console.log("")-> used to print on consolel window]

// trim()-> used to remove the whitespaces in beginning & ending of a string 
let myName="    Dashvanth   ";
console.log("Before trim method:", myName);
console.log("After trim method:", myName.trim());
// even after using the trim method the value of the myname remains same (String are immutable(cant't be changed))

/*let password=prompt("set you password");
let newpassword=password.trim();
console.log(newpassword); */

// Strings are immutable ->Every string methods creates a new string but the old str does not change its value
let msg='           Hey! how are you?';
let newmsg=msg.trim();
console.log(newmsg);
console.log(msg);


// ToupperCase & ToloweCase 
let fruit="apple";
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());



// String methods with arguments -> argument is a value that we pass to the method 
// indexOf method
let tweet="ilovecoding";
console.log(tweet.indexOf('z'));

// Method Chaining -> adding one method after another 
// let message="           hey there!";
// let message=prompt("Enter your message");
// console.log(message.toUpperCase().trim());
// or
// let newMessage=message.toUpperCase().trim();
// console.log(newMessage);

// slice method -> used to cut a string and form a new string 
let whatsapp="hello!";
console.log(whatsapp.slice(0,4));
console.log(whatsapp.slice(2));

// Replace and repeat method 
// replace-> replace the particular string value 
let thougths="ILoveCoding";
let replaceThoughts=thougths.replace("Love","do");
console.log(replaceThoughts);

// repeat-> used to repeat the value as many times you want 
console.log(thougths.repeat(3));


// Practice Questions 1 
let msg1="  help!";
console.log(msg1.trim().toUpperCase());

let q2="ApnaCollege";
console.log(q2.slice(4,9));
console.log(q2.indexOf("na"));
console.log(q2.replace("Apna","Our"));

// q3
console.log(q2.slice(4).replace("l","t").replace("l","t"));