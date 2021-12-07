import FavoriteRestoIdb from '../data/favoriterestaurant-idb';
import {
    createLikeButtonTemplate,
    createLikedButtonTemplate
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, resto }) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto = resto;
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
        const resto = await FavoriteRestoIdb.getRestaurant(id);

        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestoIdb.putRestaurant(this._resto);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
        
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestoIdb.deleteRestaurant(this._resto.id);
            this._renderButton();
        });
    }
};

export default LikeButtonInitiator;
