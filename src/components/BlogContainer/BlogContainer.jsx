import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';


const BlogContainer = ({ classes }) => (
  <div className={classes.BlogContainer}>Blog Container will be here</div>
);

BlogContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};


export default injectSheet(styles)(BlogContainer);
