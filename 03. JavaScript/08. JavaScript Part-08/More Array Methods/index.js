// Array Methods 

//1.  ForEach method 
let arr=[1,2,3,4,5,6];
/*arr.forEach(function(ele){
    console.log(ele);
})*/

// or 

arr.forEach(ele=>console.log(ele));

// or 

/*let print=function(ele){
    console.log(ele);
}
arr.forEach(print);
*/

// forEach with array of objects 
let student=[
    {
        name:"dashvanth",
        age:22, 
        marks:95
    }, 
    {
        name:"ananya",
        age:19,
        marks:92
    },
    {
        name:"priya",
        age:22,
        marks:90
    }
]

// student.forEach((student)=>console.log(student.name));

// 2. map method -> works same as forEach but create a new array

let num=[1,2,3,4];

let double=num.map((el)=>{
    return el*2;
})


// converting marks into GPA 
let gpa=student.map((el)=>{
    return el.marks/10;
})


// 3. filter method -> it works on callback funciton whether it gives true the eles will added to new array else not 
let arrr=[1, 2, 4, 3, 5, 6 , 9, 10, 8, 12 ,11, 13 ];

let arrr2=arrr.filter((num)=>(num%2==0)); //even =true, odd=false
let arrr3=arrr.filter((num)=>(num!=0)); //odd=true, even=false
let arrr4=arrr.filter((num)=>(num>5)); //>5 wil be true

// 4. Every Method ->returns true if every element of array  gives true for some function or else returns false.   ( Basically similar to logical AND operator) &&
let nums=[1,2,3,4,5];
let numsAns=nums.every((ele)=>(ele%2==0));
console.log(numsAns)

let nums2=[2, 4, 6, 8];
let numsAns2=nums2.every((ele)=>(ele%2==0));
console.log(numsAns2);

// 5.some Method -> return truei if some element of array gives true for or else return false 

let nums3=[2,3,4,5,6];
let numsAns3=nums3.some((ele)=>(ele%2==0))
console.log(numsAns3);




// 6. Reduce Method -> used to reduce the arrays to a single value

let numbers=[1,2,3,4];
let ansNumbers=numbers.reduce((res,ele)=>(res+ele));

// Finding Maximum in an array using reduce method 
let array=[1, 2, 5, 10, 4, 20, 40, 80];

let max=array.reduce((max,el)=>{
    if(max<=el){
        return el;
    }else{
        return max;
    }
});

console.log(max);


// practice Question ->check all the elements in an array are multiples of ten
let mulOf10=[10,20,30,40];
let mulAns=mulOf10.every((el)=>(el%10==0));

// practice questin -> find the min number in an array using reduce method 
let minarr=[1, 2, 5, 10, 4, 20, 40, 80];

let min=array.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});

