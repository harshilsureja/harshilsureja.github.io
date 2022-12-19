import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const middleware = [thunk];

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    // middleware,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
