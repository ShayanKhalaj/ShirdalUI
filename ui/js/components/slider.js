const slides = document.querySelector('.slider-slides');
const slideCount = document.querySelectorAll('.slider-slide').length

let currentIndex = 0;

document.querySelector('.slider-button--next').addEventListener('click',function(){
    currentIndex = (currentIndex + 1) % slideCount
    slides.style.transform = `translateX(-${currentIndex*100}%)`;
})

document.querySelector('.slider-button--pre').addEventListener('click',function(){
    currentIndex = (currentIndex - 1 + slideCount) % slideCount
    slides.style.transform = `translateX(-${currentIndex*100}%)`;
})

document.addEventListener('DOMContentLoaded',function(){
    setInterval(()=>{
        currentIndex = (currentIndex + 1) % slideCount
        slides.style.transform = `translateX(-${currentIndex*100}%)`;
    },3000)
})