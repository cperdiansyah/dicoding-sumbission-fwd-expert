import 'regenerator-runtime';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
    content: document.querySelector('#mainContent'),
    document
});
app.renderSkeletonLoad();

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
