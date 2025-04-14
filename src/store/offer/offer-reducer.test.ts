import { makeFakeOffer, makeFakeComments, makeFakeComment } from '../../fake-data/fake-offer';
import { makeFakeOffers, } from '../../fake-data/fakeOffers';
import { getOffer, getOffersNearby, getOfferComments, addOfferComments,} from '../../services/api-action/offer-action';
import offerReducer from './offer-reducer';

const FAKE_ID_OFFER = 'test-offer-id';
const initialState = {
  offer: null,
  offersNearby: [],
  comments: [],
  userComment: null,
  isLoading: false,
};

describe('offerReducer', () => {
  it('should  set "getOffer.fulfilled" action', () => {
    const mockOffer = makeFakeOffer();
    const expectedState = { ...initialState, offer: mockOffer, };

    const result = offerReducer(undefined, getOffer.fulfilled(mockOffer, '', mockOffer.id));
    expect(result).toEqual(expectedState);
  });

  it('should handle getOffer.rejected action', () => { // Есть смылс в обрабокте оишбок если они не храняться  сторе?
    const error = new Error('Request failed');
    const action = getOffer.rejected(error, '', 'offer-id', {message: 'Error message'});

    const result = offerReducer(undefined, action);
    expect(result).toEqual(initialState);
  });

  it('should  set "getOffersNearby.fulfilled" action', () => {
    const mockOffer = makeFakeOffers(4);
    const expectedState = { ...initialState, offersNearby: mockOffer };

    const result = offerReducer(undefined, getOffersNearby.fulfilled(mockOffer, '', FAKE_ID_OFFER));
    expect(result).toEqual(expectedState);
  });

  it('should  set "getOfferComments.fulfilled" action', () => {
    const mockComments = makeFakeComments(5);
    const expectedState = { ...initialState, comments: mockComments };

    const result = offerReducer(undefined, getOfferComments.fulfilled(mockComments, '', FAKE_ID_OFFER));
    expect(result).toEqual(expectedState);
  });

  it('should  set "addOfferComments.fulfilled" action', () => {
    const mockComment = makeFakeComment();
    const mockUserComment = { comment: 'Test comment', rating: 5 };
    const expectedState = { ...initialState, userComment: mockComment };

    const result = offerReducer(undefined, addOfferComments.fulfilled(mockComment, '', {offerId: FAKE_ID_OFFER, commentData: mockUserComment}));
    expect(result).toEqual(expectedState);
  });

});
