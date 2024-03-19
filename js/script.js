
const navLinks=document.querySelector('.nav-links')
function onClickToggleMenu(e){
    e.name= e.name==='menu'?'close':'menu'
    navLinks.classList.toggle('top-[9%]')  
}