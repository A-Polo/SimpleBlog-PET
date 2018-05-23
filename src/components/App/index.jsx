import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, { ThemeProvider } from 'react-jss';
import theme from '../../assets/theme/theme';
import Header from '../Header';
import '../../assets/styles/global.scss';

const styles = theme => ({
  app: {
    background: 'rgba(196,196,196,0.1)',
    display: theme.flex,
    flexDirection: theme.direction,
    height: '100vh',
  },
});

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
  </div>
);

const StyleComp = injectSheet(styles)(App);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default () => (
  <ThemeProvider theme={theme}>
    <StyleComp />
  </ThemeProvider>
);

