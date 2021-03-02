let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
// const inputmin = document.customForm ; 
const pause = document.querySelector('.pause');




function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);

    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft == 0){
            timerDisplay.textContent = "Time UP!!!";
            document.title = "TIME UP";
            endDisplay.textContent = '';
            clearInterval(countdown);
        }
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
        
    }, 1000);

}


function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const minute = minutes>60 ? minutes-60 : minutes ;
    const hours = Math.floor(minutes / 60);
    const remainderSeconds = seconds % 60;
    const display = `${hours==0 ? '': hours+":"}${minute <10 ? '0': ''}${minute}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end  =  new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endDisplay.textContent = `Be Back At ${hours > 12 ? hours-12: hours }:
                                ${minutes <10 ? '0':''}${minutes}`;

}
function startTimer(){
    const seconds = this.dataset.time;
    timer(seconds);

}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm .addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();
})