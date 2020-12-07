document.querySelector('.humbergers').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav-item');
})

function hideNav(){
    document.querySelector('nav').classList.remove('show-nav-item');
}