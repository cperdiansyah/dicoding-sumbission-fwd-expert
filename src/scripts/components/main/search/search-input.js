class SearchInput extends HTMLElement {
    set searchquery(value) {
        this._searchquery = value;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.renderClick();
    }

    render() {
        this.innerHTML = `
           <div id="searchResto">
                <input type="text"
                    id="search"
                    class="form-control"
                    placeholder="Search restaurants name, category or menu"
                    name="name"
                    value="${decodeURI(this._searchquery)}"
                />

            <button type="button" class="btn btn-submit" id="btn-submit">Submit</button>
           </div>
        `;
    }

    renderClick() {
        console.log(this._clickEvent);
    }
}
customElements.define('search-input', SearchInput);
