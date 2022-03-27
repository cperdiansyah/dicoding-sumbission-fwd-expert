import RestaurantSource from '../../data/restaurant-source';
import '../../components/main/resto-list/resto-list';
import { createElementlist } from '../templates/template-creator';

const List = {
    async render() {
        return `
        <div class="content">
            <hero-banner class="hero"></hero-banner>
            <div class='container' id='main-content'>
                <div id='content'>
                    <h2 class="section-title mt-60">Restaurant Recomendations</h2>
                    <div class="main">
                        <resto-list></resto-list>
                    </div>
                </div>
            </div>
        </div>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.getRestaurants();
        
        createElementlist('resto-list', restaurants.restaurants);
    }
};

export default List;
