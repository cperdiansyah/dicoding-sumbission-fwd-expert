import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.scss';

import './data';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const menuButton = document.querySelector('#menu');
const body = document.querySelector('body');
const navList = document.querySelector('ul.nav_list');

menuButton.addEventListener('click', (event) => {
	navList.classList.toggle('show');
	event.stopPropagation();
});

body.addEventListener('click', (event) => {
	navList.classList.remove('show');
	event.stopPropagation();
});
