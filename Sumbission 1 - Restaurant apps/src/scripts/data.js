import data from '../DATA.json';

const restaurants = document.querySelector('#restaurants');
const menus = document.querySelector('#top-menu');

restaurants.innerHTML = '';
menus.innerHTML = '';

data.result.map((result) => {
	result.menus.map((menu) => {
		menus.innerHTML += `<div class="card-menu" tabindex="0">
						<img
							class="img-card"
							src="./images/menu/${menu.pictureId}"
							alt="${menu.name} menu"
							loading="lazy" tabindex="0"
						/>
						<div class="menu-text">
							<h3 class="menu-title" tabindex="0">${menu.name}</h3>
							<p class="menu-resto" tabindex="0">${menu.cafe}</p>
						</div>
					</div>`;
	});

	result.restaurants.map((restaurant) => {
		restaurants.innerHTML += `<div class="card" tabindex="0">
						<img
							class="img-card"
							src="${restaurant.pictureId}"
							alt="${restaurant.name} Restaurant"
							loading="lazy" tabindex="0"
							
						/>
						<div class="text-card-wrapper">
							<div class="card-description">
								<div class="card-upper">
									<p class="resto-location" tabindex="0">${restaurant.city}</p>
									<div class="rating">
										<i class="fas fa-star rating-icon"></i>
										<span class="rating-value" tabindex="0">${restaurant.rating}</span>
									</div>
								</div>
								<div class="card-bottom">
								<h3 class="resto-title" tabindex="0">
									${restaurant.name}
								</h3>
							</div>
							</div>
							
						</div>
					</div>`;
	});
});
