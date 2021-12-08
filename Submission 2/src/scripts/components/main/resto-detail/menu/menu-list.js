import './menu-item';
class MenuList extends HTMLElement {
    set menuList(menuList) {
        this._menuList = menuList;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._menuList.menu.forEach((menu) => {
            const menuItemElement = document.createElement('menu-item');
            menuItemElement.className = this._menuList.name;
            menuItemElement.menuItem = menu;
            this.appendChild(menuItemElement);
        });
    }
}
customElements.define('menu-list', MenuList);
