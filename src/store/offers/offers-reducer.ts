import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypePlace } from '../../types/place-type/place-type';
import { MockOffers } from '../../mocks/offers/mockOffers';

const CITY_NAME_DEFAULT = 'Paris';

type InitialState = {
  city: string;
  offers: TypePlace[];
  sorting: string;
  list: TypePlace[];
}

const initialState: InitialState = {
  city: CITY_NAME_DEFAULT,
  offers: [],
  sorting: 'Popular',
  list: MockOffers
};

const offersReducer = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<TypePlace[]>) {
      state.offers = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

export const { setOffers, setCity, setSorting, } = offersReducer.actions;
export default offersReducer.reducer;


