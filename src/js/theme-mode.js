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

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  refs.body.classList.add(Theme.DARK);
  refs.switcher.checked = true;
};

function switchBox() {
  if (refs.switcher.checked) {
    refs.body.classList.add(Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
    localStorage.setItem('theme', Theme.DARK)
  } else {
    refs.body.classList.add(Theme.LIGHT)
    refs.body.classList.remove(Theme.DARK)
    localStorage.setItem('theme', Theme.LIGHT)
  }
};