(() => {
  const checboxEl = document.querySelector('#toggle');
  const mobileMenuEl = document.querySelector('.mobile-menu__list');
  const toggleEl = document.querySelector('#toggle');

  checboxEl.addEventListener('click', onChecboxClick);
  mobileMenuEl.addEventListener('click', removeMenu);

  function onChecboxClick() {
    mobileMenuEl.classList.toggle('is-open');
  }

  function removeMenu(event) {
    if (event.target.classList.contains('mobile-menu__link')) {
      toggleEl.checked = false;
      return onChecboxClick();
    }
    if (!event.target.classList.contains('mobile-menu__items')) {
      toggleEl.checked = false;
      return onChecboxClick();
    }
  }
})();
