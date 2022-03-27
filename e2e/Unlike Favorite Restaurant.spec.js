const assert = require('assert');

Feature('Unlike Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
    I.dontSeeElement('restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.dontSeeElement('restaurant-item');

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

    I.seeElement('restaurant-item h3');

    await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('restaurant-item');
});
