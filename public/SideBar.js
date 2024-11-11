
let closee = document.getElementById('close');
let sideBar = document.querySelector('.SideBar');
let openn = document.getElementById('open');
let container = document.querySelector('.container');
let nav = document.querySelector('nav');

closee.addEventListener('click', () => {
    sideBar.classList.remove('active');
    container.classList.remove('shift');
    nav.classList.remove('hide');

    if(matchMedia("(max-width: 600px)").matches){
        sideBar.classList.remove('fromUp');
    }
    
})

openn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    container.classList.toggle('shift');
    nav.classList.toggle('hide');

    if(matchMedia("(max-width: 600px)").matches){
        sideBar.classList.toggle('fromUp');
    }
})


