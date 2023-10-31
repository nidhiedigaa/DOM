//id name

let first=document.getElementById('div-one')
console.log(first)

//class name

let arrone=document.getElementsByClassName('div-two')
console.log(arrone)

let second=arrone[0]
console.log(second)

//tag name

let arrtwo=document.getElementsByTagName('p')
console.log(arrtwo)

let third=arrtwo[0]
console.log(third)

//query selector

let four=document.querySelector('.div-two>p')
console.log(four)

//query selector all

let arrthree=document.querySelectorAll('div>p')
console.log(arrthree)

