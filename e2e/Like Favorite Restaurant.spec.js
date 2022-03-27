const assert = require('assert');

Feature('Liking Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
    I.see('Favorite restaurant not found', '.empty-restaurant-list');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Favorite restaurant not found', '.empty-restaurant-list');

    I.amOnPage('/');

    I.scrollTo('restaurant-container');
    I.wait(1);

    I.seeElement('restaurant-item h3');

    const firstRestaurant = locate('restaurant-item h3').first();

    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-item h3');

    const likedRestaurants = await I.grabTextFrom(
        locate('restaurant-item h3').first()
    );

    assert.strictEqual(firstRestaurantTitle, likedRestaurants);
});
