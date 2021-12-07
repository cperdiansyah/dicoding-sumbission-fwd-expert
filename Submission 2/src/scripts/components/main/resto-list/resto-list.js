import './resto-item.js';

class RestoList extends HTMLElement {
    set List(restaurants) {
        this._list = restaurants;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._list.forEach((resto) => {
            const restoElement = document.createElement('resto-item');
            restoElement.classList.add('card');
            restoElement.resto = resto;
            this.appendChild(restoElement);
        });
    }

    renderError(message) {
        this.innerHTML += `<h3 class="text-center text-white">${message}</h3>`;
    }
}
customElements.define('resto-list', RestoList);
