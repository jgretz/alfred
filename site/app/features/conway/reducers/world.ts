/* eslint-disable no-param-reassign */
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Point} from '@jgretz/dot-matrix';

import {World} from '../types';
import {ToggleCellActions} from '../actions';
import {createWorld} from '../services';
import {HEIGHT, WIDTH} from '../constants';

export type WorldState = World;

const INITIAL = createWorld(HEIGHT, WIDTH);

export default createReducer(INITIAL, {
  [ToggleCellActions.ToggleCell]: (state: WorldState, action: PayloadAction<Point>) => {
    const point = action.payload;

    state.domain[point.x][point.y].alive = !state.domain[point.x][point.y].alive;
  },
});
