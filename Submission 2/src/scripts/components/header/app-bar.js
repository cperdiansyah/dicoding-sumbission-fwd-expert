/* Create custom element javascript */

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>

        <div class="app-bar__brand">
                <a class="header_title color-primary" href="#" tabindex="0">
                    <h1>Makan<span class="color-secondary">.in</span></h1>
                </a>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/list">Home</a></li>
                <li><a href="#/search">Search</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/cperdiansyah/" target="_blank"
                >About Us</a></li>
            </ul>
        </nav>

        `;
    }
}
customElements.define('app-bar', AppBar);
