import './review-item';
class ReviewList extends HTMLElement {
    set reviewList(reviews) {
        this._reviewList = reviews;
        this.render();
    }
    
    render() {
        this.innerHTML = '';
        this._reviewList.forEach((review) => {
            const reviewItemElemet = document.createElement('review-item');
            reviewItemElemet.reviewItem = review;
            this.appendChild(reviewItemElemet);
        });
    }
}
customElements.define('review-list', ReviewList);
