import { TypePlace } from '../place-type/place-type';
import { Host } from './host';

type Offer = Omit<TypePlace, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
}

export type {Offer};

