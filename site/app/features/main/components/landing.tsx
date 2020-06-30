import React from 'react';

import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import {Conway} from '../../conway/components';

type Props = {
  classes: {
    container: string;
  };
};

const Landing = ({classes}: Props) => (
  <div className={classes.container}>
    <Conway />
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
