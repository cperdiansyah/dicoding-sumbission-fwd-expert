class ReviewItem extends HTMLElement {
    set reviewItem(review) {
        this._reviewItem = review;
        this.render();
    }
    render() {
        this.innerHTML += `
        <div class="user-info-wrapper">
            <img src="https://source.unsplash.com/100x100?avatar ${this._reviewItem.name}" alt="">
            <div class="user-and-date">
                <h4 class="user-name">${this._reviewItem.name}</h4>
                <p class="date">${this._reviewItem.date}</p>
            </div>
        </div>
        <div class="user-review">
            <p class="review-text">"${this._reviewItem.review}"</p>
        </div>`;
    }
}
customElements.define('review-item', ReviewItem);
