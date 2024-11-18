const tabs = document.querySelectorAll('.tabs-button')
const pannels = document.querySelectorAll('.tabs-pannel')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((item)=>{item.classList.remove('active')})
        pannels.forEach((item)=>{item.classList.remove('active')})

        tab.classList.add('active')

        const targetPannel = document.querySelector(`#${tab.dataset.tab}`)
        targetPannel.classList.add('active')
    })
})