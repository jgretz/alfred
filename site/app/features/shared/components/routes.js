import React from 'react';
import {Switch, Route} from 'react-router';

import {Doorman} from '../../doorman/components';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route path="/" exact component={Doorman} />
    <Route path="/door" component={Doorman} />

    <Route component={NotFound} />
  </Switch>
);
