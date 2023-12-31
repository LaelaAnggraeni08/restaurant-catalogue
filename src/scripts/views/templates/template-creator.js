import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information : </h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p><br>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => `<li> ${food.name} </li>`).join('')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((drink) => `<li> ${drink.name} </li>`).join('')}</p>
    <h4>Customer Reviews</h4>
    <p>${restaurant.customerReviews.map((customerReview) => `
    <p>Nama : ${customerReview.name}</p>
    <p>Review : ${customerReview.review}</p>
    <p>Date : ${customerReview.date}</p>`).join('')}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header" tabindex="0">
      <img class="restaurant-item__header__poster lazyload" tabindex="0"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score" tabindex="0">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p tabindex="0">${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
