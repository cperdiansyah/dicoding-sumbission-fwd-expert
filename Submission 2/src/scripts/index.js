import 'regenerator-runtime';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './components/header/app-bar';
import './components/footer/footer-bar';
import './components/main/hero';

import '../styles/scss/index.scss';
import '../styles/scss/responsive.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

//Get the button:
const bottonBackToTop = document.getElementById('btn-back-to-top');
const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        bottonBackToTop.style.bottom = '15px';
        // bottonBackToTop.style.display = 'block';
    } else {
        bottonBackToTop.style.bottom = '-50px';
        // bottonBackToTop.style.display = 'none';
    }
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

bottonBackToTop,
    addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
