import React from 'react';

import {compose, withMemo, withState, withEffect} from '@truefit/bach';
import {Text, BasicFont} from 'dot-matrix';

import {Board} from '../../led/components';

// types
type PublicProps = {
  text: string;
};

type InternalProps = {
  scene: Text;

  x: number;
  setX: (x: number) => void;
};

type Props = PublicProps & InternalProps;

// constants
const width = 32;
const y = 1;
const frameRate = 4 / 60 * 1000;

// render
const ScrollingText = ({scene}: Props) => <Board rows={8} columns={width} scene={scene} />;

// handlers
const widthForText = (text: string) => {
  return (text.length * BasicFont.width + text.length * BasicFont.spacing);
}

const initialX = ({text}: Props) => width;

const move = ({text, x, setX}: Props) => {
  setTimeout(() => {
    if (x < widthForText(text) * -1) {
      setX(width);
    } else {
      setX(x - 1);
    }
  }, frameRate)
}

const makeScene = ({text, x}: Props) => {
  return new Text(text, {x, y});
};

// compose
export default compose<PublicProps>(
  withState('x', 'setX', initialX),

  withEffect(move, ['x']),

  withMemo('scene', makeScene),
)(ScrollingText);