// import FavoriteRestoIdb from '../data/favoriterestaurant-idb';

import {
    createLikeButtonRestaurantTemplate,
    createUnlikeButtonRestaurantTemplate
} from '../views/templates/template-creators';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, resto, favoriteRestaurants }) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto = resto;
        this._favoriteRestaurants = favoriteRestaurants;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._resto;

        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const resto = await this._favoriteRestaurants.getRestaurant(id);

        // console.log(this._favoriteRestaurants.getRestaurant(id));
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML =
            createLikeButtonRestaurantTemplate();
        const likeButton = document.querySelector('#likeButton');

        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.putRestaurant(this._resto);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML =
            createUnlikeButtonRestaurantTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.deleteRestaurant(this._resto.id);
            this._renderButton();
        });
    }
};

export default LikeButtonPresenter;
