document.addEventListener('DOMContentLoaded',function(){
    const toast = document.querySelector('.toast');
    const btnClose = document.querySelector('.toast-close');
    function showToast(){
        toast.classList.add('show')
        setTimeout(()=>{
            toast.classList.remove('show')
        },10000)

        btnClose.addEventListener('click',function(){
            toast.classList.remove('show')
        })
    }
    showToast()
})