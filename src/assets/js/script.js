var nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-white');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        nav.classList.remove('pt-lg-4');

    } else {
        nav.classList.remove('bg-white');
        nav.classList.add('navbar-dark');
        nav.classList.add('pt-lg-4');


    }
})

$('.navbar-toggler').click(() => {
    $('.navbar').toggleClass('bg-white');
    $('.navbar').toggleClass('navbar-dark');
})
