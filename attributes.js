let ul=document.querySelector('ul')
ul.setAttribute('id','lists')
console.log(ul)

let arrone=document.querySelectorAll('div')
for(i of arrone)
{
    console.log(i.getAttribute('class'))
}

let eleone=document.querySelector('.div-one')
console.log(eleone)
eleone.removeAttribute('class')
console.log(eleone)

eleone.classList.add('div-one')
console.log(eleone.classList.contains('div-one'))
eleone.classList.remove('div-one')
console.log(eleone)