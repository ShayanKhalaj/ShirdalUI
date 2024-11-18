const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')

dropdownToggle.addEventListener('click',()=>{
    dropdownMenu.classList.toggle('active')
})

document.addEventListener('click',function(e){
    if(!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)){
        dropdownMenu.classList.remove('active')
    }
})