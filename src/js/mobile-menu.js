(() => {
  const checboxEl = document.querySelector('#toggle');
  const mobileMenuRef = document.querySelector('.mobile-menu__list');

  checboxEl.addEventListener('click', onChecboxClick);

  function onChecboxClick() {
    mobileMenuRef.classList.toggle('is-open');
  }
})();
