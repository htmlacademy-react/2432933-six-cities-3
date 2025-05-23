import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

type InitialState = {
  activeCard: string | null;
}

const initialState: InitialState = {
  activeCard: null,
};

const activeCardReducer = createSlice({
  name: NameSpace.Card,
  initialState,
  reducers: {
    setActiveCard(state, action: PayloadAction<string | null>) {
      state.activeCard = action.payload;
    }
  }
});

export const { setActiveCard } = activeCardReducer.actions;
export default activeCardReducer.reducer;
