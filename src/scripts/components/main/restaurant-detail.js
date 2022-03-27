import MenuTabInitiator from '../../utils/menu-tab-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

import './section/content';
import './section/menu';
import './section/review-container';
import './section/add-review';

class RestaurantDetail extends HTMLElement {
    set detail(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="section-top-detail">
                <div class="background-wrapper">
                    <picture>
                        <source media="(max-width: 425px)" srcset="./images/hero-detail-gradient-small.jpg">

                        <source media="(max-width: 768px)" srcset="../images/hero-detail-gradient-large.jpg">
                    
                         
                        <img
                        class="lazyload" 
                        data-src="./images/hero-detail-gradient.jpg" alt="background Image"  tabindex="0" loading="lazy"/>
                    </picture>

                </div>
                <detail-content></detail-content>
            </div>

            <div class="section-bottom-detail mt-60">
                <div class="description">
                    <h2 class="section-title"  tabindex="0">Description</h2>
                    <p class="description-detail" tabindex="0">${this._detail.description}</p>
                </div>

                <div class="menus mt-60">
                    <h2 class="section-title"  tabindex="0">Menus</h2>
                    <menu-elements></menu-elements>
                </div>

                <div class="reviews mt-60">
                    <h2 class="section-title"  tabindex="0">Reviews</h2>

                    <review-container></review-container>
                </div>

                <div class="add-review mt-60">
                    <h2 class="section-title"  tabindex="0">Add Review</h2>

                    <add-review></add-review>
                </div>
            </div>

        `;

        const content = document.querySelector('detail-content');
        content.contentInfo = this._detail;

        const menus = document.querySelector('menu-elements');
        menus.menu = this._detail.menus;

        const customerReviews = document.querySelector('review-container');
        customerReviews.reviewContainer = this._detail.customerReviews;

        const buttonTab = document.querySelectorAll('.tablinks');
        buttonTab.forEach((button) => {
            button.addEventListener('click', (event) => {
                MenuTabInitiator.init({
                    tabEvent: event
                });
            });
        });

        const addReview = document.querySelector('add-review');
        addReview.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            AddReviewInitiator.init({
                dataForm: new FormData(document.querySelector('form')),
                id: this._detail.id
            });
        });
    }
}
customElements.define('restaurant-detail', RestaurantDetail);
