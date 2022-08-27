import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SomeState {}

const initialState: SomeState = {};

export const pizzaSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    setSome: (state, action: PayloadAction) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setSome } = pizzaSlice.actions;

export default pizzaSlice.reducer;
