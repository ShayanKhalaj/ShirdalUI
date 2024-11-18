const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children)
const next = document.querySelector('.carousel-button--right')
const prev = document.querySelector('.carousel-button--left')

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width + 20;

const updateButtons = ()=>{
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === slides.length-1;
}


const moveToSlide = (index)=>{
    const amountToMove=-index * slideWidth 
    track.style.transform = `translateX(${amountToMove}px)`;
    currentIndex = index
    updateButtons()
}

next.addEventListener('click',function(){
    if(currentIndex < slides.length-1){
        moveToSlide(currentIndex+1)
    }
})

prev.addEventListener('click',function(){
    if(currentIndex > 0){
        moveToSlide(currentIndex-1)
    }
})

updateButtons()