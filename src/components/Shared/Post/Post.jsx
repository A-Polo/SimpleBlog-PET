import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Post = ({ classes, children }) => (
  <div className={classes.postWrap}>
    <div className={classes.post}>{ children }</div>
  </div>
);

Post.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.string.isRequired,
};

export default injectSheet(styles)(Post);
