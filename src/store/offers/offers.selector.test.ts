import { makeFakeOffers } from '../../fake-data/fakeOffers';
import { filtersOffers, sortingOffers } from '../../utils/filter-sort-offers';
import { offersSelector } from './offers-selector';

describe('User selectors', () => {
  it('should select sort and filter Offers', () => {
    const mockOffers = makeFakeOffers(2);
    const mockCity = 'Paris';
    const mockSort = 'Popular';

    const filtered = filtersOffers(mockOffers, mockCity);
    const sorted = sortingOffers(filtered, mockSort);

    const mockState = {
      offers: {
        list: mockOffers,
        city: mockCity,
        sorting: mockSort,
        isLoading : false,
      },
    };

    const result = offersSelector(mockState);

    expect(result).toEqual(sorted);
  });

});
