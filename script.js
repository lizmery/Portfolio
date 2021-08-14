/* Hamburger Menu */
const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#0d1010';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

/* Theme Switch */
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
let sectionTitles = document.querySelectorAll('.section-title');
let contactLink = document.querySelector('.contactLink');
let boxShadows = document.querySelectorAll('.box-shadow');

themeSwitch.onclick = function() {
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark-theme');

    sectionTitles.forEach(function(el) {
        el.classList.toggle('dark-theme-title');
    });

    boxShadows.forEach(function(el) {
        el.classList.toggle('box-shadow-night');
    });
}
