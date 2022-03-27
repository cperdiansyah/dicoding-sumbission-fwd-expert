import API_ENDPOINT from '../../../globals/api-endpoint';
import './category';

class ContentInfo extends HTMLElement {
    set contentInfo(content) {
        this._contentInfo = content;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="content">
            <div class="resto-image">
                <img
                    class="lazyload"
                    data-src="${API_ENDPOINT.IMAGE_SMALL(
                        this._contentInfo.pictureId
                    )}"
                    alt="Restaurant ${
                        this._contentInfo.name
                    } Image" tabindex="0" loading="lazy"
                />
            </div>
            <div class="resto-info">
                <h2 class="resto-name" tabindex="0">${
                    this._contentInfo.name
                }</h2>
                <div class="location-rating d-flex align-items-center">
                    <div class="location d-flex align-items-center">
                        <img class="lazyload" data-src="./icons/location.svg" alt="location outline icon" tabindex="0" loading="lazy"/>
                        <span class="location-name" tabindex="0">${
                            this._contentInfo.city
                        }</span>
                    </div>

                    <div class="rating">
                        <span class="icon-star" aria-label="star icon" tabindex="0"><i class="fas fa-star" ></i></span>
                        <span class="rating-number" tabindex="0">${
                            this._contentInfo.rating
                        }</span>
                    </div>
                </div>
                <div class="address-section">
                    <div class="address" tabindex="0">
                        <span >${this._contentInfo.address}</span>
                    </div>
                </div>
                <detail-categories class="category-item"></detail-categories>

            </div>
            <div class="like-button" id="likeButtonContainer">
                <button aria-label="like this resto" id="likeButton" class="like"  tabindex="0">
                    <i class="far fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        </div>

        `;

        const categories = document.querySelector('detail-categories');
        categories.category = this._contentInfo.categories;
    }
}

customElements.define('detail-content', ContentInfo);
