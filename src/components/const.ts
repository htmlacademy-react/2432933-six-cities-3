enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam' , 'Hamburg', 'Dusseldorf'];
const CITY_NAME_DEFAULT = 'Paris';

export {AppRoute , AuthorizationStatus, cities, CITY_NAME_DEFAULT};
