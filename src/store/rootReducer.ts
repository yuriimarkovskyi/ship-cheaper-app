import { combineReducers } from '@reduxjs/toolkit';
import customersReducer from './customersSlice';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  customers: customersReducer,
});

export default rootReducer;
