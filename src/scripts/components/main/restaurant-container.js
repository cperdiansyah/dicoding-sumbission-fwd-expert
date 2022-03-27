import './restaurant-item';

class RestaurantContainer extends HTMLElement {
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._restaurants.forEach((restaurant) => {
            const restaurantsElement =
            document.createElement('restaurant-item');
            restaurantsElement.classList.add('card');
            restaurantsElement.restaurant = restaurant;

            this.appendChild(restaurantsElement);
        });
    }
}
customElements.define('restaurant-container', RestaurantContainer);
