import { makeFakeOffers } from '../../fake-data/fakeOffers';
import { RequestStatus } from '../const';
import { selectFirstFewOffers } from './offer.selector';

const initialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,
  status: RequestStatus.INITIAL,
};


describe('User selectors', () => {
  it('should select first 3 offers from offersNearby', () => {
    const mockOffers = makeFakeOffers(20);

    const mockState = {
      offer: {
        ...initialState,
        offersNearby: mockOffers,
      }

    };
    const result = selectFirstFewOffers(mockState);

    expect(result).toEqual(mockOffers.slice(0, 3));
  });

});
