import './menu-item';

class MenuContainer extends HTMLElement {
    set container(container) {
        this._container = container;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._container.menu.forEach((menu) => {
            const menuItemElement = document.createElement('menu-item');
            menuItemElement.className = this._container.name;
            menuItemElement.setAttribute('tabindex', '0');
            menuItemElement.menuItem = menu;
            this.appendChild(menuItemElement);
        });
    }
}
customElements.define('menu-container', MenuContainer);
