import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('liking a restaurant', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        expect(
            document.querySelector('[aria-label="like this restaurant"]')
        ).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        expect(
            document.querySelector('[aria-label="unlike this restaurant"]')
        ).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(
            'rqdv5juczeskfw1e867'
        );

        expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });
        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });
    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        // Tambahkan restaurant dengan ID rqdv5juczeskfw1e867 (restoran dengan urutan ke- 1) ke daftar restaurant yang disukai
        await FavoriteRestaurantIdb.putRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        // Simulasikan pengguna menekan tombol suka restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        // Tambahkan restaurant dengan ID rqdv5juczeskfw1e867 (restoran dengan urutan ke- 1) ke daftar restaurant yang disukai
        await FavoriteRestaurantIdb.putRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        // Simulasikan pengguna menekan tombol suka restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada restaurant yang ganda
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
            { id: 'rqdv5juczeskfw1e867' }
        ]);

        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
