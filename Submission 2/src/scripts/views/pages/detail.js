import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
    createElementDetail,
    createLikeButtonTemplate
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
      <div class="container" id='main-content'>
        <resto-detail></resto-detail>
      </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        const resto = (await RestaurantSource.getRestaurantsDetail(url.id))
            .restaurant;

        createElementDetail('resto-detail', resto);

        const likeButtonContainer = document.querySelector(
            '#likeButtonContainer'
        );
        likeButtonContainer.innerHTML = createLikeButtonTemplate();

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                city: resto.city,
                rating: resto.rating
            }
        });
    }
};

export default Detail;
