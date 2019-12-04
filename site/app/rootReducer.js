/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import shared from './features/shared/reducers';

const rootReducer = history =>
  combineReducers({
    features: combineReducers({
      shared: shared,
    }),
    router: connectRouter(history),
  });

export default rootReducer;
