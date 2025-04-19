import faker from 'faker';
import { TypePlace } from '../types/place-type/place-type';
import { Comment } from '../types/offer-type/comment-type';
import { cities } from '../components/const';

const MAX_RATING = 5;

const makeFakeLocation = () => ({
  latitude: Number(faker.address.latitude()),
  longitude: Number(faker.address.longitude()),
  zoom: faker.datatype.number(),
});

const makeFakeCity = () => ({
  name: cities[Math.floor(Math.random() * cities.length)],
  location: makeFakeLocation()
});


const makeFakePlace = (): TypePlace => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.word(5),
  type: faker.datatype.string(),
  price: faker.datatype.number(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isPremium: faker.datatype.boolean(),
  isFavorite: faker.datatype.boolean(),
  rating: faker.datatype.number(MAX_RATING),
  previewImage: faker.datatype.string(),
});


const makeFakeOffers = (number: number) => Array.from({ length: number }, makeFakePlace);

const makeFakeComment = () => ({
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4
});

const makeFakeComments = (): Comment => ({
  ...makeFakeComment(),
  date: '2019-05-08T14:13:56.569Z',
  id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
  user: {
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false,
    name: 'Oliver Conner',
  }
});

export { makeFakeOffers, makeFakeCity, makeFakeLocation, makeFakePlace, makeFakeComment, makeFakeComments };
