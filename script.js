document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    const backdrop = document.querySelector('.navbar .backdrop');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        backdrop.classList.toggle('active');
    })

    backdrop.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        backdrop.classList.toggle('active');
    })
});