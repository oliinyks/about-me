const goToTopEl = document.getElementById('goToTop');
const waveEl = document.querySelector('.wave-box');
const header = document.querySelector('.header');

function arrowScrollTop() {
  if (window.scrollY > 50) {
	goToTopEl.style.opacity = '1';
	    waveEl.style.opacity = '0';
  } else {
	goToTopEl.style.opacity = '0';
    waveEl.style.opacity = '1';
  }
  goToTopEl.addEventListener('click', () => {
	header.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

window.addEventListener('scroll', arrowScrollTop);