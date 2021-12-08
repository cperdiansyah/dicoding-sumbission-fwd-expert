import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createElementlist } from '../templates/template-creator';

import '../../components/main/search/search-components';

const SearchData = {
    async render() {
        return `
        <div class="container" id='main-content'>
            <search-components></search-components>

          </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        if (url.id === undefined) {
            createElementlist('search-components', []);
        } else {
            const search = await RestaurantSource.getRestaurantsBySearch(
                url.id
            );
            createElementlist('search-components', search.restaurants);
        }
    }
};

export default SearchData;
