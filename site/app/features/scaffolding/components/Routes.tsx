import React from 'react';
import {Switch, Route} from 'react-router';

import {Landing} from '../../main/components';
import {NotFound} from '../../shared/components';

export default () => (
  <Switch>
    <Route exact path="/">
      <Landing />
    </Route>

    <Route>
      <NotFound />
    </Route>
  </Switch>
);
