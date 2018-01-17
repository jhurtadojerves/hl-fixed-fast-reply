
let fRStyle = document.createElement('style')
fRStyle.textContent = `
  .frFixed {
    z-index: 1000;
    bottom: 1%;
    left: 0%;
  }


  #fRButton {
    position: absolute;
    top: 4%;
    left: 87%;
    font-weight: bold;
    font-size: 20px;    
  }
  
  #fRSize {
    position: absolute;
    bottom: 4%;
    left: 2%;
    font-weight: bold;
    font-size: 20px;
    width: 75px; 
  }

`

document.head.append(fRStyle)

const fastReply = document.getElementById('fast_reply_wrapper')
fastReply.style.position = 'relative'
const originalSize = fastReply.offsetWidth
console.log(fastReply.offsetWidth)

let fRButton = document.createElement('button')

fRButton.setAttribute('id', 'fRButton')

let cross = document.createTextNode('X')
let plus = document.createTextNode('+')
fRButton.appendChild(plus)
let fRFixedStatus = false


fastReply.append(fRButton)

let fRSize = document.createElement('input')
fRSize.setAttribute('type', 'number')
fRSize.setAttribute('value', `${parseInt(fastReply.offsetWidth)}`)

fRSize.setAttribute('id', 'fRSize')

fastReply.append(fRSize)


fRButton.addEventListener('click', () => {
  if (!fRFixedStatus) {
    fastReply.classList.add('frFixed')
    fastReply.style.position = 'fixed'
    fRSize.value = parseInt(fastReply.offsetWidth)
  }
  else {
    fastReply.classList.remove('frFixed')
    fastReply.style.position = 'relative'
    fastReply.style.maxWidth = `${originalSize}px`
    console.log(originalSize)
    fRSize.value = originalSize
  }
  fRFixedStatus = !fRFixedStatus
})

fRSize.addEventListener('change', () => {
  fastReply.style.maxWidth = `${fRSize.value}px`
})