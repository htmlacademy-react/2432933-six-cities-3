import { Offer } from '../../types/offer-type/offer-type';

const MockOffer :Offer = {
  'id': '8ad2908a-e9de-4f2d-9e00-3df600c34582',
  'title': 'The house among olive ',
  'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
  'type': 'house',
  'price': 733,
  'images': [
    'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.86861,
    'longitude': 2.342499,
    'zoom': 16
  },
  'goods': [
    'Air conditioning',
    'Heating',
    'Kitchen',
    'Coffee machine',
    'Dishwasher',
    'Breakfast',
    'Cable TV'
  ],
  'host': {
    'isPro': true,
    'name': 'Angelina',
    'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
  },
  'isPremium': false,
  'isFavorite': true,
  'rating': 3.5,
  'bedrooms': 1,
  'maxAdults': 3
};


export {MockOffer};
export type {Offer};
