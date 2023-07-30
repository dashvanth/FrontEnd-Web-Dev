let btn=document.querySelector('button');

btn.addEventListener('click', function(){
    let h3=document.querySelector('h3');
    let randomColor=getRandomColor();//this is not needed
    h3.innerHTML=randomColor;

    let div=document.querySelector('div');
    div.style.backgroundColor=randomColor;

    console.log(`Color Updated ${randomColor}`);
});


function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}

