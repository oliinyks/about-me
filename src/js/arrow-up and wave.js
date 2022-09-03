const goToTopEl = document.getElementById('goToTop');
const waveEl = document.querySelector('.wave-box');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  goToTopEl.style.transition = 'var(--bounce) 0.1s';
  waveEl.style.transition = 'var(--bounce) 0.1s';
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    goToTopEl.style.opacity = '1';
    waveEl.style.opacity = '0';
  } else {
    goToTopEl.style.opacity = '0';
    waveEl.style.opacity = '1';
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE     and Opera
}

goToTopEl.addEventListener('click', topFunction);
