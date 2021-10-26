const btnMenu = document.querySelector('#btn-open-menu');
const menu = document.querySelector('.header-menu');
const btn_close = document.querySelector('#btn-close-menu');
btnMenu.addEventListener('click', function() {
    menu.classList.add('active-menu');
});
btn_close.addEventListener('click', function() {
    menu.classList.remove('active-menu');
})