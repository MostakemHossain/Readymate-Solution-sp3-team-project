
const navLinks=document.querySelector('.nav-links')
function onClickToggleMenu(e){
    e.name= e.name==='menu'?'close':'menu'
    navLinks.classList.toggle('top-[9%]')  
}

let calcScrollValue=()=>{
    let scrollProgress= document.getElementById("progress")
    let progressValue= document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop
    let calcHeight= document.documentElement.scrollHeight-document.documentElement.clientHeight
    let scrollValue= Math.round((pos*100)/calcHeight)

    if(pos>100){
        scrollProgress.style.display="grid"
    }else{
        scrollProgress.style.display="none"
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop=0;
    })
    scrollProgress.style.background=`conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll=calcScrollValue;
window.onload=calcScrollValue



let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) 
}