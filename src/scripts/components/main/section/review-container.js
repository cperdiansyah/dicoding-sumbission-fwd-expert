import './review-item';

class ReviewContainer extends HTMLElement {
    set reviewContainer(reviews) {
        this._reviewContainer = reviews;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._reviewContainer.forEach((review) => {
            const reviewItemElemet = document.createElement('review-item');
            reviewItemElemet.reviewItem = review;
            reviewItemElemet.setAttribute('tabindex', '0');

            this.appendChild(reviewItemElemet);
        });
    }
}
customElements.define('review-container', ReviewContainer);
