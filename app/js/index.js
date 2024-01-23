var icon = document.getElementById('icon');

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = './app/img/sun.png';
  } else {
    icon.src = './app/img/moon.png';
  }
};
