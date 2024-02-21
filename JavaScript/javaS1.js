function toggleMenu() {
  var menu = document.getElementById("menu");
  var menuToggle = document.getElementById("menuToggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

window.onclick = function(event) {
  var menu = document.querySelector('.menu');
  var menuToggle = document.querySelector('.menu-toggle');

  if (event.target !== menu && event.target !== menuToggle && !menu.contains(event.target)) {
      menu.classList.remove('active');
  }
}
