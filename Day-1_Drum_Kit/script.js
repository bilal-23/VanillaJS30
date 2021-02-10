  
window.addEventListener('keydown', playsound)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function from running
    audio.currentTime=0;//resets the audio time.
    audio.play();
    key.classList.add('playing');
};
function removeTransition(e){
    if(e.propertyName!='transform') return;
    this.classList.remove('playing');
}

