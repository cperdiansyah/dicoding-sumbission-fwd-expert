import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createElementContainer } from '../templates/template-creators';
import { skeletonLoadSearch } from '../templates/skeleton-template-creator';

import '../../components/main/search-components';

const SearchData = {
    skeletonLoad() {
        return `
        <div class="container" id='main-content' >
            <search-components>
                ${skeletonLoadSearch()}
            </search-components>

        </div>
    `;
    },

    async render() {
        return `
        <div class="container" id='main-content' >
            <search-components>
                ${skeletonLoadSearch()}
            </search-components>
        </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        if (url.id === undefined) {
            createElementContainer('search-components', []);
        } else {
            const search = await RestaurantSource.getRestaurantsBySearch(
                url.id
            );
            createElementContainer('search-components', search.restaurants);
        }
    }
};

export default SearchData;
