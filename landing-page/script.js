document.querySelector('.humbergers').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav-item');
});

function hideMenu(){
    document.querySelector('nav').classList.remove('show-nav-item');
}