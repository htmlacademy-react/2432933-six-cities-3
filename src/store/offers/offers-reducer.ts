import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypePlace } from '../../types/place-type/place-type';

const CITY_NAME_DEFAULT = 'Paris';

type InitialState = {
  city: string;
  offers: TypePlace[];
  sorting: string;
  list: TypePlace[];
  loadStatus: boolean;
}

const initialState: InitialState = {
  city: CITY_NAME_DEFAULT,
  offers: [],
  sorting: 'Popular',
  list: [],
  loadStatus: false,
};

const offersReducer = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<TypePlace[]>){
      state.list = action.payload;
    },
    setOffers(state, action: PayloadAction<TypePlace[]>) {
      state.offers = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    setLoadStatusOffers(state, action: PayloadAction<boolean>) {
      state.loadStatus = action.payload;
    }
  },
}); // extraReducers тоже нужно ? для полчуния offers или досточно диспачить

export const { setOffers, setCity, setSorting, loadOffers, setLoadStatusOffers} = offersReducer.actions;
export default offersReducer.reducer;


