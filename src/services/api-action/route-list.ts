const routeList = {
  OFFERS: '/offers',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  FAVORITES: '/favorite',
  USER_COMMENTS: (offerId :string) => `comments/${offerId}`,
  OFFER: (offerId :string) => `/offers/${offerId}`,
  OFFERS_NEARBY: (offerId :string) => `/offers/${offerId}/nearby`,
  COMMENTS: (offerId :string) => `/comments/${offerId}`,
  FAVORITE_STATUS: (offerId :string, isFavorite: boolean) => `/favorite/${offerId}/${isFavorite ? 1 : 0}`,
};

export { routeList };
