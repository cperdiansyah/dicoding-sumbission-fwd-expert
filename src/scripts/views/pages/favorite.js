import FavoriteRestoIdb from '../../data/favoriterestaurant-idb';
import '../../components/main/restaurant-container';

import { createElementContainer } from '../templates/template-creators';
import { skeletonLoadFavorite } from '../templates/skeleton-template-creator';

const Favorite = {
    skeletonLoad() {
        // return skeletonLoadFavorite();
        return `
          <div class="container" id='main-content'>
           <div class="favorite-section">
                <h2 class="section-title mt-60" tabindex="0">Favorite Restaurants </h2>
            </div>
            <div class="restaurant-list" id="restaurant-list">
                <restaurant-container class="skeleton-load">
                    ${skeletonLoadFavorite()}
                </restaurant-container>
            </div>

          </div>
    `;
    },
    async render() {
        return `
          <div class="container" id='main-content'>
           <div class="favorite-section">
                <h2 class="section-title mt-60" tabindex="0">Favorite Restaurants </h2>
            </div>
            <div class="restaurant-list" id="restaurant-list">
                <restaurant-container class="skeleton-load">
                    ${skeletonLoadFavorite()}
                </restaurant-container>
            </div>

          </div>
    `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestoIdb.getAllRestaurants();

        if (restaurants.length > 0) {
            document
                .querySelector('restaurant-container')
                .classList.remove('skeleton-load');
            createElementContainer('restaurant-container', restaurants);
        } else {
            this.renderEmpty();
        }
    },

    renderEmpty() {
        const restaurantContainer = document.querySelector(
            'restaurant-container'
        );
        restaurantContainer.classList.add('skeleton-load');

        restaurantContainer.innerHTML = `
               <div class="empty-restaurant-list">
                    <picture>
                        <img
                        class="lazyload" 
                        data-src="./images/search-not-found.png" alt="background Image"  tabindex="0" loading="lazy"/>
                    </picture>

                    <h2 class="section-title mt-60" tabindex="0">Favorite restaurant not found</h2>

                </div>

        `;
    }
};

export default Favorite;
