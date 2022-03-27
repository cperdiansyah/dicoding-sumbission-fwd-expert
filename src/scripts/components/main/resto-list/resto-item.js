import API_ENDPOINT from '../../../globals/api-endpoint';
import '../resto-detail/resto-detail';

class RestoItem extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this.render();
    }
    render() {
        this.innerHTML = `
        <a href="#/detail/${this._resto.id}">
        <img
                class="img-card"
                src="${API_ENDPOINT.IMAGE_SMALL(this._resto.pictureId)}"
                alt="${this._resto.name} Restaurant Image"
                loading="lazy"
            />
            <div class="text-card-wrapper">
                <div class="card-description">
                    <div class="card-upper">
                        <p class="resto-location">${this._resto.city}</p>
                        <div class="rating">
                            <i class="fas fa-star rating-icon"></i>
                            <span class="rating-value">${
                                this._resto.rating
                            }</span>
                        </div>
                    </div>

                    <div class="card-bottom">
                        <h3 class="resto-title">${this._resto.name}</h3>
                    </div>
                </div>
            </div>

        </a>
        
        
        `;
    }
}
customElements.define('resto-item', RestoItem);
