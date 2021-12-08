class SearchResult extends HTMLElement {
    set Result(result) {
        this._result = result;
        console.log(this._result);
        this._result.length > 0 && this._result != null
            ? this.render()
            : this.renderNull();
    }

    render() {
        this._result.forEach((query) => {
            const restoElement = document.createElement('resto-item');
            restoElement.classList.add('card');
            restoElement.resto = query;
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
