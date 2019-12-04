import React from 'react';
import {withRouter} from 'react-router';

import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Routes} from './features/shared/components';

import {themeDefinitionSelector} from './features/shared/selectors';

const App = ({theme}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Routes />
  </MuiThemeProvider>
);

export default withRouter(
  compose(withSelector('theme', themeDefinitionSelector))(App),
);
