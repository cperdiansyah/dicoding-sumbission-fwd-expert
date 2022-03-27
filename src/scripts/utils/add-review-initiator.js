import RestaurantSource from '../data/restaurant-source';

const AddReviewInitiator = {
    init({ dataForm, id }) {
        this._dataForm = dataForm;
        this._id = id;

        this._addReview(this._dataForm, this._id);
        this._resetForm();
    },

    async _addReview(dataForm, id) {
        dataForm.append('id', id);

        const data = Array.from(dataForm.keys()).reduce((result, key) => {
            const _result = result;
            _result[key] = dataForm.get(key);
            return result;
        }, {});
        const addReviews = RestaurantSource.addNewReview(data);
        this._refreshReviews((await addReviews).customerReviews);
    },

    async _refreshReviews(reviews) {
        const reviewsContainer = document.querySelector('review-container');
        reviewsContainer.reviewContainer = reviews;
    },
    _resetForm() {
        document.querySelector('#reviewResto').reset();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
};
export default AddReviewInitiator;
