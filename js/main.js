const socialButton = document.querySelector('[data-mobile-social="button"]');
const socialMenu = document.querySelector('[data-mobile-social="nav"]');
socialButton.addEventListener('click', () => {
  socialMenu.classList.toggle('social-menu-open');
});
