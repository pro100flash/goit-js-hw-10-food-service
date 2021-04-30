import dishes from './menu.json';
import menuCardsTpl from '../templates/menu-cards.hbs';

const markUp = menuCardsTpl(dishes);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markUp);