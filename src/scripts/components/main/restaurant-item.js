import API_ENDPOINT from '../../globals/api-endpoint';
import './restaurant-detail';

class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    async render() {
        this.innerHTML = `
        <a href="#/detail/${this._restaurant.id}">
        <img
                class="lazyload img-card"
                data-src="${API_ENDPOINT.IMAGE_SMALL(
                    this._restaurant.pictureId
                )}"
                alt="${
                    this._restaurant.name
                } Restaurant Image" tabindex="0" loading="lazy"
            />
            <div class="text-card-wrapper">
                <div class="card-description">
                    <div class="card-upper">
                        <p class="resto-location" tabindex="0">${
                            this._restaurant.city
                        }</p>
                        <div class="rating">
                            <i class="fas fa-star rating-icon" aria-label="star rating icon"  tabindex="0"></i>
                            <span class="rating-value" tabindex="0">${
                                this._restaurant.rating
                            }</span>
                        </div>
                    </div>

                    <div class="card-bottom">
                        <h3 class="resto-title" tabindex="0">${
                            this._restaurant.name
                        }</h3>
                    </div>
                </div>
            </div>

        </a>
        
        `;

        
    }
}
customElements.define('restaurant-item', RestaurantItem);
