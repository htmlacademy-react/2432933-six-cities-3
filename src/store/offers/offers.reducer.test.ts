import { makeFakeOffers } from '../../fake-data/fakeOffers';
import { updateFavoriteStatus } from '../../services/api-action/favorites-action/favorite-action';
import { getOffers } from '../../services/api-action/offers-action/offers.action';
import offersReducer from './offers-reducer';

const CITY_NAME_DEFAULT = 'Paris';

describe('favoritesReducer', () => {
  const initialState = {
    city: CITY_NAME_DEFAULT,
    sorting: 'Popular',
    list: [],
    isLoading : false,
  };
  it('should return initial state with empty action', () => {
    const result = offersReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should handle getOffers.fulfilled', () => {
    const mockOffers = makeFakeOffers(1);
    const result = offersReducer(initialState, getOffers.fulfilled(mockOffers, '', undefined));

    expect(result.isLoading).toBe(false);
    expect(result.list).toEqual(mockOffers);
  });

  it('should handle getOffers.rejected', () => {
    const result = offersReducer(initialState, getOffers.rejected(null, '', undefined));

    expect(result.isLoading).toBe(false);
    expect(result.list).toEqual([]);
  });

  it('should update offer in list when updateFavoriteStatus.fulfilled', () => {
    const mockFavorites = makeFakeOffers(1);

    const initialStateOffers = {
      ...initialState,
      list: mockFavorites,
    };

    const updatedOffer = {
      ...mockFavorites[0],
      isFavorite: !mockFavorites[0].isFavorite,
    };

    const action = updateFavoriteStatus.fulfilled(
      updatedOffer,
      '',
      { offerId: updatedOffer.id, isFavorite: updatedOffer.isFavorite }
    );

    const result = offersReducer(initialStateOffers, action);
    expect(result.list).toHaveLength(mockFavorites.length);
    expect(result.list[0]).toEqual(updatedOffer);
  });

});
