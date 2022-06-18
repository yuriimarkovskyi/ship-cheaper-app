import { combineReducers } from '@reduxjs/toolkit';
import customersReducer from './slices/customersSlice';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  customers: customersReducer,
});

export default rootReducer;
