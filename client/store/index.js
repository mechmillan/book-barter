import { createStore, applyMiddleware } from 'redux';
import dummyReducer from '../reducers/dummyReduce';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

const store = createStore(
  dummyReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
