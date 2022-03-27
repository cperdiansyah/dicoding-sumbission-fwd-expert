import './restaurant-item';

class SearchResult extends HTMLElement {
    set Result(result) {
        this._result = result;

        if (this._result.length > 0 && this._result != null) {
            this.render();
        } else {
            this.renderNull();
        }
    }

    render() {
        this._result.forEach((query) => {
            const restoElement = document.createElement('restaurant-item');
            restoElement.classList.add('card');
            restoElement.restaurant = query;
            this.appendChild(restoElement);
        });
    }

    renderNull() {
        const nullElement = document.createElement('div');
        nullElement.classList.add('null');
        nullElement.innerHTML = '<p>No result</p>';
        this.appendChild(nullElement);
    }
}
customElements.define('search-result', SearchResult);
