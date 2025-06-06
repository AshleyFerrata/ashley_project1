// JS goes here
document.getElementById('view-designs').addEventListener('click', () => {
  window.location.href = 'services.html';
});
// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
// Toggle overlay nav
const hamburger = document.getElementById('hamburger');
const overlayNav = document.getElementById('overlayNav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  overlayNav.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlayNav.classList.remove('show');
});
