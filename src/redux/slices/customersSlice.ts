import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from 'types';

const initialState: ICustomer[] = [];

const customersSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    // eslint-disable-next-line max-len
    deleteCustomer: (state, action:PayloadAction<number>) => state.filter((val) => val.id !== action.payload),
  },
});

export const { addCustomer, deleteCustomer } = customersSlice.actions;

export default customersSlice.reducer;
