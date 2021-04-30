const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(Theme.LIGHT);
refs.switcher.addEventListener('change', switchBox);

const savedTheme = localStorage.getItem('Theme');

function switchBox() {
  refs.body.classList.toggle(Theme.DARK);

  localStorage.setItem('Theme', refs.body.classList);
};

if (savedTheme === 'light-theme dark-theme') {
  refs.body.classList.add(Theme.DARK);
  refs.switcher.checked = true;
};