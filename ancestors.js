let ele=document.querySelectorAll('p')
for(i of ele)
{
    console.log(i.parentElement.parentElement)
    // i.parentElement.innerText+='hello hello'
    i.innerHTML+='<p>new</p>'
    i.textContent+='hello'
    
}

let eleone=document.querySelectorAll('div')
console.log(eleone)

for(i of eleone)
{
    console.log(i.children)
    console.log(i.firstElementChild)
    console.log(i.lastElementChild)
    console.log(i.previousElementSibling)
    console.log(i.nextElementSibling)
}

for(i of eleone)
{

    console.log(i)
}
