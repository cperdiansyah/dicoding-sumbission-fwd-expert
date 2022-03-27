const assert = require('assert');

Feature('Change Menu Restaurant');

Before(({ I }) => {
    I.amOnPage('/');

    I.scrollTo('restaurant-container');
    I.wait(1);

    I.seeElement('restaurant-item h3');

    I.click(locate('restaurant-item h3').first());
});

Scenario('change menu restaurant', ({ I }) => {
    I.scrollTo('.description-detail');

    I.see('Foods', '.tablinks.active[name="foods"]');
    I.wait(2);

    I.click('.tablinks[name="drinks"]');
    I.see('Drinks', '.tablinks.active[name="drinks"]');
});

Scenario('check menu foods and drinks', async ({ I }) => {
    I.scrollTo('menu-elements');
    I.wait(1);

    I.seeElement('menu-container h3');

    /* Ambil nama menu makanan pertama */

    const foodMenuTitle = await I.grabTextFrom(
        locate('menu-container h3').first()
    );

    I.scrollTo('.description-detail');

    I.click('.tablinks[name="drinks"]');

    I.wait(2);

    I.seeElement('menu-container h3');

    /* Ambil nama menu minuman pertama */

    const drinksMenuTitle = await I.grabTextFrom(
        locate('menu-container h3').first()
    );
    console.log(drinksMenuTitle);

    /* Check kedua menu pertama tidak sama */
    assert.notEqual(foodMenuTitle, drinksMenuTitle);
});
