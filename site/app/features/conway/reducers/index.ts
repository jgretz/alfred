/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import world, {WorldState} from './world';

export type ConwayState = {
  world: WorldState;
};

export default combineReducers({
  world,
});
