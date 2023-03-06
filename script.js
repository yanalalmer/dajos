// HAMBURGER MENU
const menuBtn = document.querySelector('.header__burger');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  if (isMenuOpen) {
    menuBtn.classList.remove('open');
    isMenuOpen = false;
  } else {
    menuBtn.classList.add('open');
    isMenuOpen = true;
  }
});
