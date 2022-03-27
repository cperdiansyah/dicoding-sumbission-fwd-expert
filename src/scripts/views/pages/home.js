import RestaurantSource from '../../data/restaurant-source';

import { createElementContainer } from '../templates/template-creators';
import {
    skeletonLoadHome,
    createSkeletonRestaurantItem
} from '../templates/skeleton-template-creator';
import '../../components/main/restaurant-container';

const Home = {
    skeletonLoad() {
        return skeletonLoadHome();
    },

    async render() {
        return `
        <div class="content">
            <hero-banner class="hero">
            </hero-banner>
            <div class='container'  id='main-content'  tabindex="0">
                <div id='content'>
                    <h2 class="section-title mt-60" tabindex="0">Restaurant Recomendations</h2>
                    <div class="main">
                    
                        <restaurant-container>
                            ${createSkeletonRestaurantItem(20)}
                        </restaurant-container>
                    </div>
                </div>
            </div>
        </div>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.getRestaurants();
        createElementContainer('restaurant-container', restaurants.restaurants);
    }
};

export default Home;
