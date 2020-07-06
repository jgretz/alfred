/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

type PublicProps = {
  color: string;

  size?: number;
  onClick?: () => void;
};

type InternalProps = {
  classes: {
    led: string;
  };

  children: React.ReactNode;
};

type Props = PublicProps & InternalProps;

const Led = ({classes, onClick, children}: Props) => (
  <div className={classes.led} onClick={onClick}>
    {children}
  </div>
);

const styles = {
  led: {
    width: ({size}: Props) => size || 50,
    height: ({size}: Props) => size || 50,
    backgroundColor: ({color}: PublicProps) => color,
    borderRadius: '50%',
  },
};

export default compose<PublicProps>(withStyles(styles))(Led);
