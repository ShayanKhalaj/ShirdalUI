document.querySelectorAll('.accardion-header').forEach((header)=>{
    header.addEventListener('click',function(){
        const content = header.nextElementSibling
        content.classList.toggle('active')
    })
})