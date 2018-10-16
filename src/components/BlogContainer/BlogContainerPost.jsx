import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import Post from '../Shared/Post';

const BlogContainerPost = ({ classes, messages }) => (
  <div className={classes.blogContainerPost}>
    {messages.map(e => <Post key={e}>{e}</Post>)}
  </div>
);

BlogContainerPost.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  messages: PropTypes.instanceOf(Array).isRequired,
};

export default injectSheet(styles)(BlogContainerPost);
