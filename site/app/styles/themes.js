import {createMuiTheme} from '@material-ui/core/styles';

const main = createMuiTheme({
  palette: {
    type: 'dark',
    background: {main: '#000'},
    primary: {main: '#c83228'},
    secondary: {main: '#ffc217'},
    tertiary: {main: '#f7f0d4'},
  },
});

export const THEMES = {
  MAIN: 'MAIN',
};

export const THEME_DEFINITIONS = {
  [THEMES.MAIN]: main,
};
