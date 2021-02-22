const canvas =document.querySelector('.photo');
const video =document.querySelector('.player');
const ctx =canvas.getContext('2d');
const strip =document.querySelector('.strip');
const snap =document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err=> {
        alert("Camera Permission Denied !")
        console.log(err);
    })
}
getVideo();

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width,height);
    canvas.width = width ;
    canvas.height = height ;

    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);

        let pixels = ctx.getImageData(0,0,width,height);

        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha= 0.8;
        pixels = greenScreen(pixels);

        ctx.putImageData(pixels,0,0);
    },30);
}
function redEffect(pixels){
 for(let i =0; i< pixels.data.length; i+=4){
     pixels.data[i+0] =  pixels.data[i+0] + 100;//r
     pixels.data[i+1] =  pixels.data[i+1]  - 50;//g
     pixels.data[i+2] =  pixels.data[i+2] * 0.5;//b
 }
 return pixels;
}

function rgbSplit(pixels){
    for(let i =0; i< pixels.data.length; i+=4){
        pixels.data[i-550] =  pixels.data[i+0] + 100;//r
        pixels.data[i+260] =  pixels.data[i+1]  - 50;//g
        pixels.data[i-200] =  pixels.data[i+2] * 0.5;//b
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }

function takePhoto(){
    snap.currentTime = 0 ;
    snap.play();
    const data = canvas.toDataURL('images/png');
    const link = document.createElement(`a`);
    link.href = data;
    link.setAttribute('donwload', 'image');
    link.innerHTML= `<img src=${data} alt="image" />`;
    strip.insertBefore(link, strip.firstChild);



}

video.addEventListener('canplay', paintToCanvas);
