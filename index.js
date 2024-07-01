let counterEl = document.getElementById("counter")


function onIncrement(){
    console.log("on increment")
    let counter = counterEl.textContent;
    let updateCounter = parseInt(counter)
    counterEl.textContent = updateCounter+1;
    if(parseInt(counterEl.textContent)<0){
        counterEl.style.color = "red";
    }
    else if(parseInt(counterEl.textContent)>0){
        counterEl.style.color = "green";
    }
    else{
        counterEl.style.color = "black";
    }
}



function onReset(){
    counterEl.textContent = "0"
    if(parseInt(counterEl.textContent)===0){
        counterEl.style.color = "black";
    }
}


function onDecrement(){
    console.log("on decrement")
    let counter = counterEl.textContent;
    let updateCounter = parseInt(counter)
    counterEl.textContent = updateCounter-1;
    if(parseInt(counterEl.textContent)<0){
        counterEl.style.color = "red";
    }
    else if(parseInt(counterEl.textContent)>0){
        counterEl.style.color = "green";
    }
    else{
        counterEl.style.color = "black";
    }
}