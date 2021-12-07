import CONFIG from './config';

const API_ENDPOINT = {
    LIST_RESTO: `${CONFIG.BASE_URL}/list`,
    DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}/detail/${id}`,

    SEARCH_RESTO: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,

    ADD_REVIEW: `${CONFIG.BASE_URL}/review`,

    IMAGE_SMALL: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/small/${pictureId}`,
    IMAGE_MEDIUM: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/medium/${pictureId}`,
    IMAGE_LARGE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/large/${pictureId}`
};

export default API_ENDPOINT;
