const divs = document.querySelectorAll('div');


function logText(e){
    // console.log(this.classList.value);
    console.log(this.classList.value  );
    e.stopPropagation(); //This will stop the bubble
}
//Bubbling
//clicks go up in bubbling three-->two-->one-->classOfBuddy
//It keeps on going to parents


//Third argument, {capture : true (by deault it is false) } will make the bubble start fro parent to child
//ClassofBody-->one-->two-->three

divs.forEach(div => div.addEventListener('click', logText, {
    capture : false,
    once : true
    //once true will work make the div clickable only once and then the event listener is removed from it.
}));


