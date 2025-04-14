import favoritesReducer from './favorites-reducer';
import { getFavoriteAction } from '../../services/api-action/favorite-action';
import { makeFakeOffers } from '../../fake-data/fakeOffers';

describe('favoritesReducer', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {favorites: [], isLoading: false, };

    const result = favoritesReducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { favorites: [], isLoading: false, };

    const result = favoritesReducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should  set "getFavoriteAction.pending" state', () => {
    const expectedState = { isLoading: true, favorites: [] };
    const result = favoritesReducer(undefined, getFavoriteAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should  set "getFavoriteAction.fulfilled" action', () => {
    const mockFavorites = makeFakeOffers(5);
    const expectedState = { isLoading: false, favorites: mockFavorites };
    const result = favoritesReducer(undefined, getFavoriteAction.fulfilled(mockFavorites, '', undefined));
    expect(result).toEqual(expectedState);
  });

});

