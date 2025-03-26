let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    menu.classList.remove('active')
}


const typed = new Typed('.multiple-text', {
    strings: ['Junior Engineer.', 'Web Designer.','Embedded Deleloper.', 'Artist.'],
    typeSpeed: 50,
    backSpeed:80,
    backDelay: 1200,
    loop: true,
  });
