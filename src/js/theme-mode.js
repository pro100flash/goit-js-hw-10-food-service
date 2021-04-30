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

function switchBox() {
  refs.body.classList.toggle(Theme.DARK);

  localStorage.setItem('Theme', refs.body.classList);
};

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === 'light-theme dark-theme') {
  refs.body.classList.add(Theme.DARK);
  refs.switcher.checked = true;
};