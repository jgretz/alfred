import React, {FunctionComponent} from 'react';

import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import {CSSProperties} from '@material-ui/styles';
import Led from './Led';

type PublicProps = {
  rows: number;
  columns: number;
};

type InternalProps = {
  classes: {
    container: string;
    row: string;
    cell: string;
  };
};

type Props = PublicProps & InternalProps;

const make = (
  keyPrefix: string,
  Component: FunctionComponent<Props>,
  count: number,
  props: Props,
) => {
  const components = [];
  for (let i = 0; i < count; i++) {
    components.push(<Component key={`${keyPrefix}-${i}`} {...props} />);
  }
  return components;
};

const Column = ({classes}: Props) => (
  <div className={classes.cell}>
    <Led color="#FF0000" />
  </div>
);

const Row = (props: Props) => (
  <div className={props.classes.row}>{make('column', Column, props.columns, props)}</div>
);

const Board = (props: Props) => {
  return <div className={props.classes.container}>{make('row', Row, props.rows, props)}</div>;
};

const styles = {
  container: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,
  cell: {
    margin: 3,
  },
};

export default compose<PublicProps>(withStyles(styles))(Board);
