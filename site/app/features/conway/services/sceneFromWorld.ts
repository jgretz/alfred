import {Scene, Tile} from '@jgretz/dot-matrix';
import {World} from '../types';

export default (world: World): Scene => {
  const tiles = new Array<Tile>();

  for (let x = 0; x < world.domain.length; x++) {
    const row = world.domain[x];

    for (let y = 0; y < row.length; y++) {
      const cell = row[y];

      tiles.push({
        point: {x, y},
        item: {
          width: 1,
          matrix: [[cell.alive ? 1 : 0]],
        },
      });
    }
  }

  return {tiles};
};
