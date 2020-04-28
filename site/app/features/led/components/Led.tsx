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

  children: React.ReactNode;
};

type Props = PublicProps & InternalProps;

const Led = ({classes, children}: Props) => <div className={classes.led}>{children}</div>;

const styles = {
  led: {
    width: 50,
    height: 50,
    backgroundColor: ({color}: PublicProps) => color,
    borderRadius: '50%',
  },
};

export default compose<PublicProps>(withStyles(styles))(Led);
