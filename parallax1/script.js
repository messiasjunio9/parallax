
const text = document.querySelector('#text')
const mountain = document.querySelector('#m1')
const trees2 = document.querySelector('#t2')
const mountain1 = document.querySelector('#m2')
const trees = document.querySelector('#t1')
const man = document.querySelector('#man')
const plants = document.querySelector('#plants')

document.addEventListener('scroll', function(){
    let value = window.scrollY

    text.style.marginTop = -value *1.1 + 'px' /*velocidade*/
    mountain.style.marginLeft = value *2.5 + 'px' /*velocidade*/

    trees2.style.marginLeft = -value *2.2 + 'px' 
    mountain1.style.marginLeft = value *1.3 + 'px' 

    trees.style.marginBottom = -value  + 'px' 

    man.style.marginLeft = -value *3.1 + 'px' 
    plants.style.marginLeft = -value *3.1 + 'px' 
})

