// ToDo App 

let todo=[];
let req=prompt("Enter your request.");

while(true){

    if(req=='quit'){
        console.log("Quitting the todo");
        break;
    }

    if(req=='add'){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log(`task: ${task} is added`);
    }
    else if(req=='list'){
        console.log("----------");
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("----------");
    }
    else if(req=='delete'){
        let idx=prompt("Enter the tasks index you want to remove");
        console.log(`task: ${todo[idx]} is removed`);
        todo.splice(idx,1);
        
    }else{
        req=prompt("wrong request. please enter the correct request");
    }

    req=prompt("Enter your request");
}