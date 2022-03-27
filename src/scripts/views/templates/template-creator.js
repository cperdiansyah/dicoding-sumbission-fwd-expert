const createElementlist = (element, data) => {
    const elementList = document.querySelector(element);
    elementList.List = data;
};

const createElementItem = (element, data) => {
    const elementList = document.querySelector(element);
    elementList.Item = data;
};

const createElementDetail = (element, data) => {
    const elementList = document.querySelector(element);
    elementList.Detail = data;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createElementlist,
    createElementItem,
    createElementDetail,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};
