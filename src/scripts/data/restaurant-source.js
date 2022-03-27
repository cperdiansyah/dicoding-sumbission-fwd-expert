import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async getRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST_RESTO);
        const responseJson = await response.json();
        return responseJson;
    }

    static async getRestaurantsDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
        const responseJson = await response.json();
        return responseJson;
    }

    static async getRestaurantsBySearch(search) {
        const response = await fetch(API_ENDPOINT.SEARCH_RESTO(search));
        const responseJson = await response.json();
        return responseJson;
    }

    static async addNewReview(review) {
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });
        const responseJson = await response.json();
        return responseJson;
    }
}
export default RestaurantSource;
