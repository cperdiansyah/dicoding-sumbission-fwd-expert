import './search-input';
import './search-result';

class SearchComponents extends HTMLElement {
    set List(list) {
        this._list = list;
        window.location.hash.slice(1).split('/').length === 3
            ? this.renderData()
            : this.render();
    }

    render() {
        const querySearch = window.location.hash.slice(1).split('/')[2] || '';

        this.innerHTML = `
            <div class="search-form">
                <h2 class="section-title">Search Restaurants </h2>
                <search-input></search-input>
            </div>
            <div class="search-list">
                <search-result></search-result>
            </div>
        `;
        const inputSearch = document.querySelector('search-input');
        inputSearch.searchquery = querySearch;

        inputSearch.querySelector('button').addEventListener('click', () => {
            const search = inputSearch.querySelector('input').value;
            window.location.hash = `#/search/${search}`;
        });

        inputSearch.querySelector('input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const search = inputSearch.querySelector('input').value;
                window.location.hash = `#/search/${search}`;
            }
        });
    }

    renderData() {
        const querySearch = window.location.hash.slice(1).split('/')[2];

        this.innerHTML = `
            <div class="search-form">
                <h2 class="section-title">Search Restaurants </h2>
                <search-input></search-input>
            </div>
            <div class="search-result">
                <div class="search-info">
                    <h2 class="section-title">Related Restaurants to <span class="query-search">"${decodeURI(
                        querySearch
                    )}"</span></h2>
                </div>
            
                <div class="search-list">
                    <search-result></search-result>
                </div>
            </div>
        `;
        const inputSearch = document.querySelector('search-input');
        inputSearch.searchquery = querySearch;

        inputSearch.querySelector('button').addEventListener('click', () => {
            const search = inputSearch.querySelector('input').value;
            window.location.hash = `#/search/${search}`;
        });

        inputSearch.querySelector('input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const search = inputSearch.querySelector('input').value;
                window.location.hash = `#/search/${search}`;
            }
        });

        const result = document.querySelector('search-result');
        result.Result = this._list;
    }
}
customElements.define('search-components', SearchComponents);
