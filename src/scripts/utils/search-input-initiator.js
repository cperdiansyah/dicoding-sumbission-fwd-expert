import RestaurantSource from '../data/restaurant-source';
import { createElementContainer } from '../views/templates/template-creators';

import '../components/main/search-components';

const SearchInputInitiator = {
    async init({ searchInput, searchButton, querySearch }) {
        this._searchInput = searchInput || '';
        this._searchButton = searchButton || '';
        this._querySearch = querySearch;
        this._render();
    },
    async _render() {
        const searchInput = this._searchInput;
        const searchButton = this._searchButton;

        await searchButton.addEventListener('click', () => {
            const search = searchInput.value;
            this._getRestaurants(search);
            // window.location.hash = `#/search/${search}`;
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const search = searchInput.value;
                this._getRestaurants(search);

                // window.location.hash = `#/search/${search}`;
            }
        });
    },

    async _getRestaurants(querySearch) {
        const search = await RestaurantSource.getRestaurantsBySearch(
            querySearch
        );

        createElementContainer('search-components', search);
    }
};
export default SearchInputInitiator;
