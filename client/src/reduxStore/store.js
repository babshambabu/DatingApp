import { configureStore } from '@reduxjs/toolkit';
import regSec1Reducer from '../features/reducer';

const store = configureStore({
  reducer: {
    regSec1: regSec1Reducer,
  },
});

export default store;
