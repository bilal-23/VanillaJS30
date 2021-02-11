const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');
const hour = document.querySelector('.hourT');
const time = document.querySelector('.time');


function setDate(){
    const now= new Date();
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    const mins = now.getMinutes();
    // console.log(mins);
    const minDegrees = ((mins/60)*360)+90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    // console.log(hours);
    const hourDegrees = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
      hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }
    hour.innerHTML= hours;
    time.innerHTML = ":"+mins+":"+seconds;}
// const hands 
setInterval(setDate,1000);