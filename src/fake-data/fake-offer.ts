import faker from 'faker';
import { Offer } from '../types/offer-type/offer-type';
import { makeFakeCity, makeFakeLocation, } from './fakeOffers';
import { Host } from '../types/offer-type/host';
import { Comment } from '../types/offer-type/comment-type';

const MAX_RATING = 5;

const makeFakeHost = (): Host => ({
  isPro : faker.datatype.boolean(),
  name: faker.name.findName(),
  avatarUrl: faker.image.avatar(),

});

const makeFakeOffer = (): Offer => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.word(5),
  type: faker.datatype.string(),
  price: faker.datatype.number(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isPremium: faker.datatype.boolean(),
  isFavorite: faker.datatype.boolean(),
  rating: faker.datatype.number(MAX_RATING),
  description: faker.lorem.sentence(),
  images: Array.from({ length: 3 }, () => faker.image.imageUrl()),
  goods:  Array.from({ length: 5 }, () => faker.commerce.product()),
  host: makeFakeHost(),
  bedrooms: faker.datatype.number({ min: 1, max: 5 }),
  maxAdults: faker.datatype.number({ min: 1, max: 5 }),
});


const makeFakeComment = (): Comment => ({
  id: faker.datatype.uuid(),
  comment: faker.lorem.word(5),
  date: String(faker.datatype.datetime()),
  rating: faker.datatype.number(MAX_RATING),
  user: makeFakeHost()
});

const makeFakeComments = (number: number) => Array.from({ length: number }, makeFakeComment);

export { makeFakeOffer,makeFakeComment, makeFakeComments };
