let memora = 600
let kech = 300
let numberMemory = memora + kech

let boxLeft = 40
let boxRigth = 70

document.querySelector('.box-left').style = `height: ${boxLeft}vh;`

document.querySelector('.box-right').style = `height: ${boxRigth}vh;`


document.querySelector('.app').innerHTML = `${numberMemory}`

document.querySelector('.memoryText').innerHTML = `<div>Оперативная память</div> <div>${memora} <sup>mb</sup></div>`

document.querySelector('.kech').innerHTML = `<div>Кеш</div><div>${kech} <sup>mb</sup></div>`


const memory = () => {

  setInterval(() => {
    if (numberMemory == 0) return

    document.querySelector('.app').innerHTML = `${numberMemory = numberMemory - 10}`

    document.querySelector('.memoryText').innerHTML = `<div>Оперативная память</div><div>${getKech()} <sup>mb</sup></div>`

    document.querySelector('.kech').innerHTML = `<div>Кеш</div><div>${getMemora()} <sup>mb</sup></div>`

    document.querySelector('.box-left').style = `height: ${getBoxLeft()}vh;  background-color: ${getColorLeft()};`

    document.querySelector('.box-right').style = `height: ${getBoxRigth()}vh;background-color: ${getColorRigth()};`


  }, 20)

}

const getColorLeft = () => {
  if (boxLeft == 0) {
    return 'green'
  } else {
    return 'yallow'
  }
}

const getColorRigth = () => {
  if (boxRigth == 0) {
    return 'green'
  } else {
    return 'orange'
  }
}

const getBoxLeft = () => {
  if (boxLeft == 0) {
    return 100
  }

  boxLeft = boxLeft - 2

  if (boxLeft == 0) {
    return 100
  } else {
    return boxLeft
  }
}

const getBoxRigth = () => {
  if (boxRigth == 0) {
    return 100
  }

  boxRigth = boxRigth - 2

  if (boxRigth == 0) {
    return 100
  } else {
    return boxRigth
  }
}



const getKech = () => {

  if (kech == 0) {
    return 0
  }

  kech = kech - 10

  if (kech == 0) {
    return 0
  } else {
    return kech
  }
}

const getMemora = () => {

  if (memora == 0) {
    return 0
  }

  memora = memora - 10

  if (memora == 0) {
    return 0
  } else {
    return memora
  }
}