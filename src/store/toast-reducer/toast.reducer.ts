import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

type InitialState = {
 type: string | null;
 message: string | null;

};

const initialState :InitialState = {
  type: null,
  message: null,
};


const toastReducer = createSlice({
  name: NameSpace.Toast,
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{message: string; type: string}>) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    removeError(state,) {
      state.message = null;
      state.type = null;
    },
  },

});

export const { setError, removeError } = toastReducer.actions;
export default toastReducer.reducer;
