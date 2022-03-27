class ReviewItem extends HTMLElement {
    set reviewItem(review) {
        this._reviewItem = review;
        this.render();
    }

    render() {
        this.innerHTML += `
        <div class="user-info-wrapper" >
            <img class="lazyload" data-src="https://source.unsplash.com/50x50?avatar ${this._reviewItem.name}" alt="${this._reviewItem.name} avatar"  tabindex="0" loading="lazy">
            <div class="user-and-date">
                <h3 class="user-name"  tabindex="0">${this._reviewItem.name}</h3>
                <p class="date"  tabindex="0">${this._reviewItem.date}</p>
            </div>
        </div>
        <div class="user-review">
            <p class="review-text"  tabindex="0">"${this._reviewItem.review}"</p>
        </div>`;
    }
}
customElements.define('review-item', ReviewItem);
