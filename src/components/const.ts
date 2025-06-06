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

export { AppRoute , AuthorizationStatus, cities };
