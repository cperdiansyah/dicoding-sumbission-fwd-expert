const createElementContainer = (DOMQuery, data) => {
    const elementContainer = document.querySelector(DOMQuery);
    elementContainer.restaurants = data;
};

const createElementItem = (DOMQuery, data) => {
    const elementItem = document.querySelector(DOMQuery);
    elementItem.restaurant = data;
};

const createElementDetail = (DOMQuery, data) => {
    const elementDetail = document.querySelector(DOMQuery);
    elementDetail.detail = data;
};

/* TODO  Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate */
const createLikeButtonRestaurantTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like"  tabindex="0">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonRestaurantTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like"  tabindex="0">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createElementContainer,
    createElementItem,
    createElementDetail,
    createLikeButtonRestaurantTemplate,
    createUnlikeButtonRestaurantTemplate
};
