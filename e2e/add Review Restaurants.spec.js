Feature('add Review Restaurant');

Scenario('add Review Restaurant ', ({ I }) => {
    I.amOnPage('/');

    I.scrollTo('restaurant-container');
    I.wait(1);

    I.seeElement('restaurant-item h3');

    I.click(locate('restaurant-item h3').first());

    I.wait(1);
    const userNameReview = 'Name Test for E2E';
    const reviewUser = 'Review Test for E2E';

    I.scrollTo('form#reviewResto');
    I.wait(1);

    I.fillField('name', userNameReview);
    I.fillField('review', reviewUser);
    I.click('.btn-submit');

    I.scrollTo('review-container');
    I.see(userNameReview, '.user-name');
    I.see(reviewUser, '.review-text');
});
