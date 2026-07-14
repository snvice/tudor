document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  const backdrop = document.querySelector(".navbar .backdrop");
  const menuIcon = document.querySelector(".navbar .mobile-menu-toggle i");
  const mobileLinks = document.querySelectorAll(".navbar .mobile-menu-list a");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  backdrop.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      backdrop.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-xmark");
    });
  });
});

// change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
})