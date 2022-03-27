import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

import {
    createElementDetail,
    createLikeButtonRestaurantTemplate
} from '../templates/template-creators';

import { skeletonLoadDetail } from '../templates/skeleton-template-creator';

import LikeButtonInitiator from '../../utils/like-button-presenter';

import FavoriteRestoIdb from '../../data/favoriterestaurant-idb';

const Detail = {
    skeletonLoad() {
        return `
      <div class="container" id='main-content' tabindex="0">
        <restaurant-detail>
            ${skeletonLoadDetail()}
        </restaurant-detail>
      </div>
    `;
    },
    async render() {
        return `
      <div class="container" id='main-content' tabindex="0">
        <restaurant-detail>
            ${skeletonLoadDetail()}
        </restaurant-detail>
      </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        const restaurantData = (
            await RestaurantSource.getRestaurantsDetail(url.id)
        ).restaurant;

        createElementDetail('restaurant-detail', restaurantData);

        const likeButtonContainer = document.querySelector(
            '#likeButtonContainer'
        );
        likeButtonContainer.innerHTML = createLikeButtonRestaurantTemplate();
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestoIdb,
            resto: {
                id: restaurantData.id,
                name: restaurantData.name,
                pictureId: restaurantData.pictureId,
                city: restaurantData.city,
                rating: restaurantData.rating
            }
        });
    }
};

export default Detail;
