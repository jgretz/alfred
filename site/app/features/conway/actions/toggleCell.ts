import {createAction} from '@reduxjs/toolkit';
import {Point} from '@jgretz/dot-matrix';

export enum ToggleCellActions {
  ToggleCell = 'CELL/TOGGLE',
}

const toggle = createAction<Point>(ToggleCellActions.ToggleCell);

export const toggleCell = (point: Point) => toggle(point);
