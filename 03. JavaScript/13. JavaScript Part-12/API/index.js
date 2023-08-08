// API -> Applicatin Programming Interface 
// customer->request->waiter(api)->waiter requesto to kitchen->receives the data->gives back to the customer-<

// Google Search(request) ->API -> Server 
// API(data sends back) -> search 

// web api's 

// accesing some api's 
// free api, paid api

// JSON -> javascript object notation 

// accessing json data 
// json data will be in string to acces we have two funs 


// 1. JSON.parse()-> to parse a string data into Object 

let jsonRes = '{"fact":"In the 1750s, Europeans introduced cats into the Americas to control pests.","length":75}';
let validRes = JSON.parse(jsonRes);


// 2. JSON.stringify()-> to parse js object data into JSON
let student = {
    fullName: "dashvnath",
    marks: 90
}
let strData=JSON.stringify(student);//strData is now a string of the above


// Testing api requests 
// hopscotth ->used to test api requests 
             

// What is Ajax -> Asynchronous javascript and xml
// the request and response process is called asynchronous and the term is  Ajax 
// ajax -> we're calling api's and api's are working asynchronously and we're getting response that we are dealing 


// https verbs 
// 1. get 2. post 3. delete etcc...
// 1.get-> we are sending a api request to test 
// 2. post -> sending a post while requesting api 
// 3. delete -> used to delete 
// we use get for front end 

// Status codes 
// 200-ok, 404- not found,400 bad request, 500 - internal server error 


// Add information in URL's 
// https://www.google.com/search?harry-+potter
            // ?->key = -> value                     //key: value



// https header 
// header , value


// our first qpi request using js 
// using fetch 

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json()
// })
// .then((data)=>{
//     console.log("data 1: ",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data 2: ",data2.fact);
// })
// .catch((err)=>{
//     console.log("error: ", err);
// })

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(err){
        console.log("error: ", err);
    }
}