/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';

import conway, {ConwayState} from './features/conway/reducers';

export type ApplicationState = {
  features: {
    conway: ConwayState;
  };
};

const createRootReducer = () =>
  combineReducers({
    features: combineReducers({
      conway: conway,
    }),
  });

export default createRootReducer;
