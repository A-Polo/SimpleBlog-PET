import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import injectSheet from 'react-jss';
import styles from './styles';

import RootStore from './stores';
import BlogContainerContent from './BlogContainerContent';

const rootStore = new RootStore();

const BlogContainer = ({ classes }) => (
  <Provider store={rootStore}>
    <BlogContainerContent classes={classes} />
  </Provider>
);

BlogContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};


export default injectSheet(styles)(BlogContainer);
