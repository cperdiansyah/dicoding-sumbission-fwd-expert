const skeletonHero = () => {
    const hero = `
        <div class="img-wrapper">
				<img
				 	class="lazyload" 
					data-src="./images/placeholder.png"
					alt="Hero Image" 
                    loading="lazy"
				/>               
 
				<div class="text-wrapper container">
					<div class="text">
						<h1>
							Find<span class="text-mark"> A Good Place,</span>
						</h1>
						<div class="overlay"></div>
						<h1>
							Start Your
							<span class="text-mark">Good Taste</span>
						</h1>

						<div class="overlay"></div>
					</div>
				</div>
			</div>
    `;
    return hero;
};

const createSkeletonRestaurantItem = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `     
       <restaurant-item class="card skeleton">
        <a href="#">
            <img
                class="img-card lazyload"
                data-src="./images/placeholder.png"
                alt="Skeleton Restaurant Image"
                tabindex="0"
                loading="lazy"
            />
            <div class="text-card-wrapper">
                <div class="card-description">
                    <div class="card-upper">
                        <p class="resto-location" tabindex="0"></p>
                        <div class="rating">
                            <i
                                class="fas fa-star rating-icon"
                                aria-label="star rating icon"
                                tabindex="0"
                            ></i>
                            <span class="rating-value" tabindex="0"></span>
                        </div>
                    </div>

                    <div class="card-bottom">
                        <h3 class="resto-title" tabindex="0"></h3>
                    </div>
                </div>
            </div>
        </a>
    </restaurant-item>        
        `;
    }
    return template;
};

const skeletonLoadHome = () => {
    const home = `
    <div class="content">
           <hero-banner class="hero">
            ${skeletonHero()}
            </hero-banner> 
            <div class='container'  id='main-content'  tabindex="0">
                <div id='content'>
                    <h2 class="section-title mt-60" tabindex="0">Restaurant Recomendations</h2>
                    <div class="main">
                    
                        <restaurant-container>
                            ${createSkeletonRestaurantItem(20)}
                        </restaurant-container>
                    </div>
                </div>
            </div>
        </div>`;
    return home;
};

const skeletonLoadSearch = () => {
    const search = `
      <div class="search-form">
        <h2 class="section-title" tabindex="0">Search Restaurants</h2>
        <search-input>
            <div id="searchResto">
                <input
                    type="text"
                    id="search"
                    class="form-control"
                    placeholder="Search restaurants name, category or menu"
                    name="name"
                    value=""
                    tabindex="0"
                />

                <button
                    type="button"
                    class="btn btn-submit"
                    id="btn-submit"
                    tabindex="0"
                >
                    Submit
                </button>
            </div>
        </search-input>
    </div>
    `;

    return search;
};

const skeletonLoadFavorite = () => {
    const favorite = `
         <div class="empty-restaurant-list skeleton-empty-restaurant-list ">
                    <picture>                 
                         
                        <img class=" ls-is-cached lazyloaded" data-src="s" alt="background Image" tabindex="0" loading="lazy" src="s">
                    </picture>

                    <h2 class="section-title mt-60" tabindex="0"></h2>

                </div>
    `;
    return favorite;
};

const skeletonLoadHeroDetail = () => {
    const heroDetail = `
        
        <div class="section-top-detail">
            <div class="background-wrapper">
                <img
                    class="lazyloaded"
                    data-src="./images/placeholder.png"
                    alt="background Image"
                    tabindex="0"
                    loading="lazy"
                    src="./images/placeholder.png"
                />
            </div>

            <detail-content>
                <div class="content">
                    <div class="resto-image">
                        <img class=" lazyloaded" data-src="./images/placeholder.png"
                        alt="Restaurant Skeleton Load" tabindex="0" loading="lazy"
                        src="./images/placeholder.png">
                    </div>

                    <div class="resto-info">
                        <h2 class="resto-name" tabindex="0">Melting Pot</h2>
                        <div class="location-rating d-flex align-items-center">
                            <div class="location d-flex align-items-center">
                                <img
                                    class="lazyloaded"
                                    data-src="./icons/location.svg"
                                    alt="location outline icon"
                                    tabindex="0"
                                    loading="lazy"
                                    src="./icons/location.svg"
                                />
                                <span class="location-name" tabindex="0">Medan</span>
                            </div>

                            <div class="rating">
                                <span
                                    class="icon-star"
                                    aria-label="star icon"
                                    tabindex="0"
                                    ><i class="fas fa-star"></i
                                ></span>
                                <span class="rating-number" tabindex="0"></span>
                            </div>
                        </div>
                        <div class="address-section">
                            <div class="address" tabindex="0">
                                <span></span>
                            </div>
                        </div>
                        <detail-categories class="category-item">
                            <div class="detail-category-container">
                                <a
                                    href="#"
                                    class="detail-category-item"
                                    tabindex="0"
                                >
                                    </a
                                >

                                <a
                                    href="#"
                                    class="detail-category-item"
                                    tabindex="0"
                                >
                                    </a
                                >
                            </div>
                        </detail-categories>
                    </div>
                    <div class="like-button" id="likeButtonContainer">
                        <button
                            aria-label="like this resto"
                            id="likeButton"
                            class="like"
                            tabindex="0"
                        >
                            <i class="far fa-heart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
        </detail-content>
        </div>

    `;
    return heroDetail;
};

const skeletonLoadDetail = () => {
    const loadDetail = `
          ${skeletonLoadHeroDetail()}

    `;
    return loadDetail;
};

export {
    skeletonHero,
    createSkeletonRestaurantItem,
    skeletonLoadHome,
    skeletonLoadSearch,
    skeletonLoadFavorite,
    skeletonLoadDetail
};
