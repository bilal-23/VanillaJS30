function getRandomColorChannel() {
    return Math.floor(Math.random() * 256)
  }
  
  function getRandomColor() {
    const red = getRandomColorChannel()
    const green = getRandomColorChannel()
    const blue = getRandomColorChannel()
    return `rgb(${red},${green},${blue})`
  }
  
  function changeBackgroundColor() {
    const randomColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = randomColor
  }
  function setBackgroundChange() {
    changeBackgroundColor()
    setInterval(changeBackgroundColor, 5000)
  }
setBackgroundChange();