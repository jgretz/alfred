import React from 'react';

import {compose, withMemo} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import {CSSProperties} from '@material-ui/styles';
import {Scene, mapSceneIn2D, Flag, Point} from '@jgretz/dot-matrix';
import Led from './Led';

type PublicProps = {
  rows: number;
  columns: number;

  scene: Scene;

  ledSize?: number;
  onLedClick?: (point: Point) => () => void;
};

type InternalProps = {
  classes: {
    container: string;
    row: string;
    cell: string;
  };

  map: Flag[][];
};

type Props = PublicProps & InternalProps;

enum LedStateColor {
  Off = '#000',
  On = '#FFF',
}

const mapLedColor = (flag: Flag): string => {
  if (typeof flag === 'string') {
    return flag;
  }

  return flag === 1 ? LedStateColor.On : LedStateColor.Off;
};

const Board = ({classes, rows, columns, ledSize, onLedClick, map}: Props) => {
  // easier to do this with context, rather than pushing everything down
  const rowComponents = [];
  for (let row = 0; row < rows; row++) {
    const columnComponents = [];
    for (let column = 0; column < columns; column++) {
      const flag = map[row][column];
      const onClick = onLedClick ? onLedClick({x: column, y: row}) : null;

      const columnJsx = (
        <div key={`led-${row}-${column}`} className={classes.cell}>
          <Led color={mapLedColor(flag)} size={ledSize} onClick={onClick} />
        </div>
      );

      columnComponents.push(columnJsx);
    }

    const rowJsx = (
      <div key={`row-${row}`} className={classes.row}>
        {columnComponents}
      </div>
    );
    rowComponents.push(rowJsx);
  }

  return <div className={classes.container}>{rowComponents}</div>;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,
  row: {
    display: 'flex',
    flexDirection: 'row',
  } as CSSProperties,
  cell: {
    margin: 3,
  },
};

const makeMap = ({scene, rows, columns}: Props) => mapSceneIn2D(scene, rows, columns);

export default compose<PublicProps>(withMemo('map', makeMap), withStyles(styles))(Board);
