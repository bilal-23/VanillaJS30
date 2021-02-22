window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true ; 

let p =document.createElement(`p`);
const words = document.querySelector(`.words`);
words.appendChild(p);

recognition.addEventListener(`result`, e =>{
    // console.log(e);
    const transcript = Array.from(e.results)
                            .map(results => results[0])
                            .map(result => result.transcript)
                            .join('');
    
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p =document.createElement(`p`);
        words.appendChild(p);
    }          

    if(transcript.includes('alert')){
        alert("You are alerted!");
    }
    if(transcript.includes('change background to red')){
        document.querySelector('body').style.background = 'red';
    }
    if(transcript.includes('change background to blue')){
        document.querySelector('body').style.background = 'blue';
    }
    if(transcript.includes('change background to yellow')){
        document.querySelector('body').style.background = 'yellow';
    }

    if(transcript.includes('change colour')){
        document.querySelector('.words').style.color = 'red';
    }
    if(transcript.includes('change font size')){
        document.querySelector('.words').style.fontSize = '4rem';
    }

})

recognition.start();
recognition.addEventListener(`end`,recognition.start);
