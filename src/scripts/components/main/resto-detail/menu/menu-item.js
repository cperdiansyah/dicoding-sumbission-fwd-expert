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
                        class="img-responsive menu-item-image"
                        src="https://source.unsplash.com/200x200?${tabSection} ${this._menuItem.name}"
                        alt="Menu ${this._menuItem.name} Image"
                    />
                </div>
                <h4 class="menu-item-title">${this._menuItem.name}</h4>
            </a>

        `;
    }
}
customElements.define('menu-item', MenuItem);
