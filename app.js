const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-toggle i');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark'); // this is the Font Awesome cross
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});