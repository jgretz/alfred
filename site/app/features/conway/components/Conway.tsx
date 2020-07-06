import React from 'react';
import {compose, withState, withMemo, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {Scene, Point} from '@jgretz/dot-matrix';

import {Board} from '../../led/components';

import {toggleCell} from '../actions';
import {sceneFromWorld} from '../services';
import {worldSelector} from '../selectors';

import {HEIGHT, WIDTH} from '../constants';
import {World} from '../types';

type Props = {
  world: World;
  scene: Scene;

  toggleCell: (point: Point) => void;
  handleLedClick: (point: Point) => () => void;
};

const Conway = ({scene, handleLedClick}: Props) => (
  <div>
    <Board rows={HEIGHT} columns={WIDTH} scene={scene} onLedClick={handleLedClick} />
  </div>
);

const handleLedClick = ({toggleCell}: Props) => (point: Point) => () => {
  toggleCell(point);
};

export default compose(
  withSelector('world', worldSelector),
  withMemo('scene', ({world}: Props) => sceneFromWorld(world)),

  withActions({toggleCell}),
  withCallback('handleLedClick', handleLedClick),

  withState('play', 'setPlay', false),
)(Conway);
