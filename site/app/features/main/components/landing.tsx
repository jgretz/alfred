import React from 'react';

import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import ScrollingText from './ScrollingText';

type Props = {
  classes: {
    container: string;
  };
};

const Landing = ({classes}: Props) => (
  <div className={classes.container}>
    <ScrollingText text="" />
  </div>
);

const styles = {
  container: {
    width: '100hw',
    height: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default compose(withStyles(styles))(Landing);
