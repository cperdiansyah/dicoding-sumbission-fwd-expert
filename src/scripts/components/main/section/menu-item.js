class MenuItem extends HTMLElement {
    set menuItem(item) {
        this._menuItem = item;
        this.render();
    }

    render() {
        const tabSection = this.getAttribute('class');

        this.innerHTML = '';
        this.innerHTML += `
            <a href="#/search/${this._menuItem.name}">
                <div class="image-wrapper">
                    <img
                        class="lazyload img-responsive menu-item-image "
                        data-src="https://source.unsplash.com/150x150?${tabSection} ${this._menuItem.name}"
                        alt="Menu ${this._menuItem.name} Image"  tabindex="0" loading="lazy"
                    />
                </div>
                <h3 class="menu-item-title"  tabindex="0">${this._menuItem.name}</h3>
            </a>

        `;
    }
}
customElements.define('menu-item', MenuItem);
