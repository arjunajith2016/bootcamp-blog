var header = document.querySelector('.sidebar');
var height = document.getElementById('navbar').offsetHeight;
var origOffsetY = header.offsetTop-height;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('sticky') : header.classList.remove('sticky');

}

document.addEventListener('scroll', onScroll);