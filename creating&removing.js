let eleone=document.querySelector('div>div>p')
console.log(eleone)

eleone.remove()

let eletwo=document.createElement('a')
eletwo.innerHTML='click'
eletwo.setAttribute('href','')
document.body.append(eletwo)
console.log(eletwo)

document.getElementsByClassName('div-four')[0].appendChild(eletwo)

document.getElementsByClassName('div-four')[0].removeChild(document.querySelector('.div-four>a'))
