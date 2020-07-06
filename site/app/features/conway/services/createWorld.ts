import {World, Cell} from '../types';

export default (height: number, width: number): World => {
  const world = {
    domain: new Array<Array<Cell>>(),
  };

  for (let i = 0; i < height; i++) {
    world.domain[i] = new Array<Cell>();

    for (let j = 0; j < width; j++) {
      world.domain[i][j] = {
        alive: false,
      };
    }
  }

  return world;
};
