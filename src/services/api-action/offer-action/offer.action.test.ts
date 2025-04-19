import { makeFakeOffer } from '../../../fake-data/fake-offer';
import { routeList } from '../route-list';
import { addOfferComments, getOffer, getOfferComments, getOffersNearby } from './offer.action';
import { makeFakeComment, makeFakeOffers, makeFakeComments} from '../../../fake-data/fakeOffers';
import { redirectToRoute } from '../../../store/redirect-to-route';
import { setupMockStore, extractActionsTypes } from '../../test-helpers';


const OFFER_ID = 'offer-id-test';

describe('Async actions', () => {
  const { mockStoreCreator, mockAxiosAdapter} = setupMockStore();
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ offer: {}});
  });

  describe('Async actions Offer', () => {
    it('should dispatch getOffer with thunk', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter.onGet(routeList.OFFER(mockOffer.id)).reply(200, mockOffer);

      const result = await store.dispatch(getOffer(mockOffer.id));
      const actions = store.getActions();
      const fulfilledAction = actions[1] as ReturnType<typeof getOffer.fulfilled>;

      expect(fulfilledAction.payload).toEqual(mockOffer);
      expect(result.payload).toEqual(mockOffer);
      expect(extractActionsTypes(actions)).toEqual([ getOffer.pending.type, getOffer.fulfilled.type ]);

    });

    it('should getOffer error', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter.onGet(routeList.OFFER(mockOffer.id)).reply(500, null);

      const result = await store.dispatch(getOffer(mockOffer.id));
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ getOffer.pending.type, redirectToRoute.type, getOffer.rejected.type ]);
    });

    it('should dispatch getOffersNearby with thunk', async () => {
      const mockOffers = makeFakeOffers(3);
      const testId = 'offer-id-test';
      mockAxiosAdapter.onGet(routeList.OFFERS_NEARBY(testId)).reply(200, mockOffers);

      const result = await store.dispatch(getOffersNearby(testId));
      const actions = store.getActions();
      const fulfilledAction = actions[1] as ReturnType<typeof getOffersNearby.fulfilled>;

      expect(fulfilledAction.payload).toEqual(mockOffers);
      expect(result.payload).toEqual(mockOffers);
      expect(extractActionsTypes(actions)).toEqual([ getOffersNearby.pending.type, getOffersNearby.fulfilled.type ]);
    });

    it('should  getOffersNearby error', async () => {
      const testId = 'offer-id-test';
      mockAxiosAdapter.onGet(routeList.OFFERS_NEARBY(testId)).reply(404, []);

      const result = await store.dispatch(getOffersNearby(testId));
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ getOffersNearby.pending.type, getOffersNearby.rejected.type ]);
    });

    it('should dispatch getOfferComments with thunk', async () => {
      const mockComments = makeFakeComments();
      mockAxiosAdapter.onGet(routeList.COMMENTS(OFFER_ID)).reply(200, mockComments);

      const result = await store.dispatch(getOfferComments(OFFER_ID));
      const actions = store.getActions();
      const fulfilledAction = actions[1] as ReturnType<typeof getOfferComments.fulfilled>;

      expect(fulfilledAction.payload).toEqual(mockComments);
      expect(result.payload).toEqual(mockComments);
      expect(extractActionsTypes(actions)).toEqual([ getOfferComments.pending.type, getOfferComments.fulfilled.type ]);
    });

    it('should  getOfferComments error', async () => {
      mockAxiosAdapter.onGet(routeList.COMMENTS(OFFER_ID)).reply(400, []);

      const result = await store.dispatch(getOffersNearby(OFFER_ID));
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ getOffersNearby.pending.type, getOffersNearby.rejected.type ]);
    });

    it('should dispatch addOfferComments with thunk', async () => {
      const commentData = makeFakeComment();
      const mockResponse = makeFakeComments();
      mockAxiosAdapter.onPost(routeList.USER_COMMENTS(OFFER_ID)).reply(200, mockResponse);
      mockAxiosAdapter.onGet(routeList.COMMENTS(OFFER_ID)).reply(200, [mockResponse]);

      const result = await store.dispatch(addOfferComments({offerId: OFFER_ID, commentData}));
      const actions = store.getActions();

      expect(result.payload).toEqual(mockResponse);
      expect(extractActionsTypes(actions)).toEqual([
        addOfferComments.pending.type,
        getOfferComments.pending.type,
        getOfferComments.fulfilled.type,
        addOfferComments.fulfilled.type,
      ]);
    });

    it('should  addOfferComments error', async () => {
      const commentData = makeFakeComment();
      mockAxiosAdapter.onPost(routeList.USER_COMMENTS(OFFER_ID)).reply(400, []);

      const result = await store.dispatch(addOfferComments({offerId: OFFER_ID, commentData}));
      const actions = store.getActions();

      expect(result.meta.requestStatus).toBe('rejected');
      expect(extractActionsTypes(actions)).toEqual([ addOfferComments.pending.type, addOfferComments.rejected.type ]);
    });
  });
});
