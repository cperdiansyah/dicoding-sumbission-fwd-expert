class DetailCategory extends HTMLElement {
    set category(category) {
        this._category = category;
        this.render();
    }
    render() {
        this.innerHTML = ` <div class="detail-category-container">
            ${this._category
                .map(
                    (category) => `
                <a href="#/search/${category.name}" class="detail-category-item"> ${category.name}</a>
            `
                )
                .join('')}
                
        </div>
                `;
    }
}
customElements.define('detail-category', DetailCategory);
