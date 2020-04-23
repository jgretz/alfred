import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

type PublicProps = {
  color: string;
};

type InternalProps = {
  classes: {
    led: string;
  };
};

type Props = PublicProps & InternalProps;

const Led = ({classes}: Props) => <div className={classes.led} />;

const styles = {
  led: {
    width: 24,
    height: 24,
    backgroundColor: ({color}: PublicProps) => color,
    borderRadius: '50%',
  },
};

export default compose<PublicProps>(withStyles(styles))(Led);
