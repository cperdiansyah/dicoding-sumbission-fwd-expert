import DrawerInitiator from '../utils/drawer-initiator';
import BackToTopInitiator from '../utils/back-to-top-initiator';

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content, document }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._document = document;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            document: this._document
        });
    }

    renderSkeletonLoad() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = page.skeletonLoad();
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();

        BackToTopInitiator.init({
            button: document.querySelector('#btn-back-to-top'),
            window
        });

        await page.afterRender();

        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('di click');
            document.querySelector('#main-content').focus();
        });
    }
}
export default App;
