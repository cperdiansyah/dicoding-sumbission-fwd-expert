import RestaurantSource from '../../../data/restaurant-source';

import './content/content';
import './menu/menu';
import './reviews/review-list';
import './reviews/add-review';

class RestoDetail extends HTMLElement {
    set Detail(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="section-top-detail">
                <div class="background-wrapper">
                    <div class="gradient"></div>
                    <img src="./images/hero/hero-image_2.jpg" alt="Hero Image" />
                </div>
                <content-info></content-info>
            </div>

            <div class="section-bottom-detail mt-60">
                <div class="description">
                    <h2 class="section-title">Description</h2>
                    <p class="description-detail">${this._detail.description}</p>
                </div>

                <div class="menus mt-60">
                    <h2 class="section-title">Menus</h2>
                    <menu-elements></menu-elements>
                </div>

                <div class="reviews mt-60">
                    <h2 class="section-title">Reviews</h2>

                    <review-list></review-list>
                </div>

                <div class="add-review mt-60">
                    <h2 class="section-title">Add Review</h2>

                    <add-review></add-review>
                </div>
            </div>

        `;

        const content = document.querySelector('content-info');
        content.contentInfo = this._detail;

        const menus = document.querySelector('menu-elements');
        menus.menu = this._detail.menus;

        const customerReviews = document.querySelector('review-list');
        customerReviews.reviewList = this._detail.customerReviews;

        const onTabSelect = (event) => {
            const tabcontent = document.querySelectorAll('.tabcontent');

            tabcontent.forEach((content) => {
                content.style.display = 'none';
            });

            const tablinks = document.querySelectorAll('.tablinks');

            tablinks.forEach((link) => {
                link.className = link.className.replace(' active', '');
            });

            document.getElementById(event.target.name).style.display = 'block';
            event.currentTarget.className += ' active';

            return;
        };

        const button = document.querySelectorAll('.tablinks');
        button.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                onTabSelect(e);
            });
        });

        const addReview = document.querySelector('add-review');

        addReview.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const dataForm = new FormData(document.querySelector('form'));

            dataForm.append('id', this._detail.id);

            const data = Array.from(dataForm.keys()).reduce((result, key) => {
                result[key] = dataForm.get(key);
                return result;
            }, {});

            RestaurantSource.addNewReview(data);
            window.location.reload();
        });
    }
}
customElements.define('resto-detail', RestoDetail);
