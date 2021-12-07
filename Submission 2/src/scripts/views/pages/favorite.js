import FavoriteRestoIdb from '../../data/favoriterestaurant-idb';
import '../../components/main/resto-list/resto-list';

import { createElementlist } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
          <div class="container" id='main-content'>
           <div class="favorite-section">
                <h2 class="section-title mt-60">Favorite Restaurants </h2>
            </div>
            <div class="restaurant-list" id="restaurant-list">
                <resto-list></resto-list>
            </div>

          </div>
    `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestoIdb.getAllRestaurants();

        // const restaurantContainer = document.getElementById('restaurant-list');

        createElementlist('resto-list', restaurants);
    }
};

export default Favorite;
