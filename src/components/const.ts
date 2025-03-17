enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const cities :string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam' , 'Hamburg', 'Dusseldorf'];
const CITY_NAME_DEFAULT = 'Paris';

export {AppRoute , AuthorizationStatus, cities, CITY_NAME_DEFAULT};
